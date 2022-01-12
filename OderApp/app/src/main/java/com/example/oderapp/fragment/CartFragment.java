package com.example.oderapp.fragment;

import android.app.Dialog;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.PaymentActivity;
import com.example.oderapp.adapters.ItemCartAdappter;
import com.example.oderapp.model.ItemCart;
import com.example.oderapp.model.QuantilyAndPrice;
import com.example.oderapp.model.response.ResponseBodyCart;
import com.example.oderapp.model.response.ResponseBodyQuantilyAndPrice;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;

import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class CartFragment extends Fragment {
    private RecyclerView mRecyclerView;
    ItemCartAdappter adappter;
    private TextView tvQuantily;
    private TextView tvPrice;
    private View mview;
    private Button btnCheckOut;
    private ImageView imgDeleteAllItemInCart;
    private SwipeRefreshLayout swipeRefreshLayout;
    private ProgressBar progressBar;

    public CartFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mview = inflater.inflate(R.layout.fragment_cart, container, false);
        initUi();
        getCart();
        getQuantilyAndPrice();


        btnCheckOut.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (adappter.getItemCount() != 0) {
                    Intent intent = new Intent(getContext(), PaymentActivity.class);
                    startActivity(intent);
                } else {
                    Toast.makeText(getContext(), "Cart is blank", Toast.LENGTH_SHORT).show();
                }

            }
        });
        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                getCart();
                getQuantilyAndPrice();
                Handler handler = new Handler();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        swipeRefreshLayout.setRefreshing(false);

                        if (adappter.getItemCount() == 0) {
                            tvPrice.setText("");
                            tvQuantily.setText("");
                        }


                    }
                }, 1000);
            }
        });

        imgDeleteAllItemInCart.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Dialog dialog = new Dialog(v.getContext());
                dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                dialog.setContentView(R.layout.dialog_confirm_delete_all_cart);

                Window window = dialog.getWindow();
                if (window == null) {
                    return;
                }

                window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                WindowManager.LayoutParams windowAtribute = window.getAttributes();
                window.setAttributes(windowAtribute);


                Button btnCancel = dialog.findViewById(R.id.btn_cancel);
                Button btnDelete = dialog.findViewById(R.id.btn_delete_all_item_in_cart);

                btnCancel.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
                // show dialog
                dialog.show();
                btnDelete.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {

                        Call<ResponseBodyCart> responseBodyCartCall = ApiClient.getProductService().deleteAllItemInCart(
                                "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));
                        responseBodyCartCall.enqueue(new Callback<ResponseBodyCart>() {
                            @Override
                            public void onResponse(Call<ResponseBodyCart> call, Response<ResponseBodyCart> response) {

                            }

                            @Override
                            public void onFailure(Call<ResponseBodyCart> call, Throwable t) {

                            }
                        });
                        dialog.dismiss();
                    }
                });

                Sprite foldingCube = new FoldingCube();
                progressBar.setIndeterminateDrawable(foldingCube);
                progressBar.setVisibility(View.VISIBLE);

                CountDownTimer countDownTimer = new CountDownTimer(3000, 1000) {
                    @Override
                    public void onTick(long millisUntilFinished) {
                        int current = progressBar.getProgress();
                        if (current >= progressBar.getMax()) {
                            current = 0;
                        }
                        progressBar.setProgress(current + 10);
                    }

                    @Override
                    public void onFinish() {
                        progressBar.setVisibility(View.INVISIBLE);
                    }
                };
                countDownTimer.start();


            }
        });
        return mview;
    }

    private void initUi() {
        mRecyclerView = mview.findViewById(R.id.rcv_cart);
        btnCheckOut = mview.findViewById(R.id.btn_check_out);
        imgDeleteAllItemInCart = mview.findViewById(R.id.img_delete_all_item_cart);
        swipeRefreshLayout = mview.findViewById(R.id.refresh);
        tvPrice = mview.findViewById(R.id.tv_price);
        tvQuantily = mview.findViewById(R.id.tv_quantily);
        progressBar = mview.findViewById(R.id.spin_kit);
    }

    private void getCart() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(getActivity(), Contants.accessToken));

        Call<ResponseBodyCart> responseDTOCall = ApiClient.getProductService().getCart(hashMap);
        responseDTOCall.enqueue(new Callback<ResponseBodyCart>() {
            @Override
            public void onResponse(Call<ResponseBodyCart> call, Response<ResponseBodyCart> response) {
                adappter = new ItemCartAdappter(getContext(), response.body().getData());
                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
                adappter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ResponseBodyCart> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }

    public void getQuantilyAndPrice() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(getContext(), Contants.accessToken));

        Call<ResponseBodyQuantilyAndPrice> responseDTOCall = ApiClient.getProductService().getQuantilyAndPrice(hashMap);
        responseDTOCall.enqueue(new Callback<ResponseBodyQuantilyAndPrice>() {
            @Override
            public void onResponse(Call<ResponseBodyQuantilyAndPrice> call, Response<ResponseBodyQuantilyAndPrice> response) {
                QuantilyAndPrice quantilyAndPrice = response.body().getData().get(0);
                tvPrice.setText(String.valueOf(quantilyAndPrice.getTongtien_gh()));
                tvQuantily.setText(String.valueOf(quantilyAndPrice.getTong_sl()));
            }

            @Override
            public void onFailure(Call<ResponseBodyQuantilyAndPrice> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }


}

