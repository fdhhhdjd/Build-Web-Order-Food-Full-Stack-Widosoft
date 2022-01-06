package com.example.oderapp.fragment;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.ViewFlipper;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.FirstScreenActivity;
import com.example.oderapp.adapters.HotThisMonthAdapter;
import com.example.oderapp.adapters.ItemProductAdappter;
import com.example.oderapp.fragmentinfo.optionaccount.UpdateInformationActivity;
import com.example.oderapp.model.Hot;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.makeramen.roundedimageview.RoundedImageView;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;

public class HomeFragment extends Fragment {
    ViewFlipper viewFlipper;
    private RoundedImageView roundedImageView;
    private TextView tvHiName;
    private ImageView imgUser;

    // search bar
    private EditText searchView;
    private CharSequence search = "";

    //get all product
    private RecyclerView mRecyclerView;
    private ItemProductAdappter mitemPizzaAdappter;
    private ArrayList<ItemFood> mitemPizzasList;
    private RequestQueue mRequestQueue;

    // Hot this month
    private RecyclerView rcvHotThisMonth;
    private List<Hot> hotThisMonths;

    public HomeFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_home, container, false);
        getActivity().getWindow().setSoftInputMode(
                WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);
        roundedImageView = view.findViewById(R.id.pizza);
        tvHiName = view.findViewById(R.id.tv_hi_name);
        searchView = view.findViewById(R.id.search);
        imgUser = view.findViewById(R.id.img_user);

        // set border image
        imgUser.setClipToOutline(true);

        // ----------------------- get Url show on home fragment--------------------
//        HashMap<String, String> hashMap = new HashMap<>();
//        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(getContext(), Contants.accessToken));
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer "+ StoreUtil.get(getContext(),"Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, retrofit2.Response<ResponseInformationUser> response) {

                    InformationUser informationUser = response.body().getData().get(0);
                if (informationUser.getUrl().isEmpty()){
                    tvHiName.setText(informationUser.getUsername());

                }else{
                    String anh = informationUser.getUrl();
                    Picasso.with(getContext())
                            .load(anh).fit().centerInside().into(imgUser);
                    tvHiName.setText(informationUser.getUsername());
                }
            }


            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });
        // ------------------------------------

        // filter
        searchView.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                filter(s.toString());
            }
        });

        int images[] = {R.drawable.promotiona, R.drawable.promotionb, R.drawable.promotionc,
                R.drawable.promotiond, R.drawable.promotione, R.drawable.promotionf, R.drawable
                .promotiong};

        viewFlipper = view.findViewById(R.id.viewflipper_hot_this_month);

        for (int image : images) {
            flipperImages(image);
        }

        // recyclerview hot this month
        rcvHotThisMonth = view.findViewById(R.id.rcv_hot_this_month);
        HotThisMonthAdapter hotThisMonthAdapter = new HotThisMonthAdapter(getContext(), hotThisMonths);
        rcvHotThisMonth.setLayoutManager(new LinearLayoutManager(getContext(), LinearLayoutManager.HORIZONTAL, false));
        rcvHotThisMonth.setAdapter(hotThisMonthAdapter);

        return view;
    }



    //--------------------------------
    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        hotThisMonths = new ArrayList<>();
        hotThisMonths.add(new Hot(R.drawable.hota, "Hết hạn 31-12-2021", "Bữa ăn đồng giá 39k", "10:00 - 23:55", "rat la ngon"));
        hotThisMonths.add(new Hot(R.drawable.hotb, "Hết hạn 26-12-2021", "Combo no nê giá chỉ 99k", "10:00 - 23:55", "Một chiếc pizza Double chesse kết với với xúc xích Ý Peperoni, một chai pepsi 1,5L"));
        hotThisMonths.add(new Hot(R.drawable.hotc, "Hết hạn 31-12-2021", "Combo pizza Giáng sinh", "10:00 - 23:55", "Ăn đã đời, vui say sưa"));
        hotThisMonths.add(new Hot(R.drawable.hota, "Hết hạn 31-12-2021", "Bua an dong gia 39k", "10:00 - 23:55", "rat la ngon"));
        hotThisMonths.add(new Hot(R.drawable.hota, "Hết hạn 31-12-2021", "Bua an dong gia 39k", "10:00 - 23:55", "rat la ngon"));

        // parse json get all products
        mitemPizzasList = new ArrayList<>();
        mRequestQueue = Volley.newRequestQueue(getContext());
//        parseJSON();
    }

    // function Slider promotion
    public void flipperImages(int image) {
        ImageView imageView = new ImageView(getContext());
        imageView.setBackgroundResource(image);
        viewFlipper.addView(imageView);
        viewFlipper.setFlipInterval(3500);
        viewFlipper.setAutoStart(true);
        viewFlipper.setInAnimation(getContext(), android.R.anim.slide_in_left);
    }

    // filter products
    private void filter(String text) {
        ArrayList<ItemFood> filteredList = new ArrayList<>();
        for (ItemFood item : mitemPizzasList) {
            if (item.getTensp().toLowerCase().contains(text.toLowerCase())) {
                filteredList.add(item);
            }
        }
        mitemPizzaAdappter.filterList(filteredList);
    }


}