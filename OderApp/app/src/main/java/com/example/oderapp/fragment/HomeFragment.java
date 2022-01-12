package com.example.oderapp.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.ViewFlipper;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.InformationUserActivity;
import com.example.oderapp.adapters.HotThisMonthAdapter;
import com.example.oderapp.adapters.ItemProductAdappter;
import com.example.oderapp.model.Hot;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.response.ResponseBodyProduct;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.makeramen.roundedimageview.RoundedImageView;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HomeFragment extends Fragment implements AdapterView.OnItemSelectedListener {
    ViewFlipper viewFlipper;
    private RoundedImageView roundedImageView;
    private TextView tvHiName;
    private ImageView imgUser;
    private Spinner spinnerSort;

    // search bar
    private EditText searchView;
    private CharSequence search = "";

    //get all product
    private RecyclerView mRecyclerView;
    private ItemProductAdappter mitemPizzaAdappter;
    private ArrayList<ItemFood> mitemItemFoodList;
    private RequestQueue mRequestQueue;

    // Hot this month
    private RecyclerView rcvHotThisMonth;
    private List<Hot> hotThisMonths;

    // loadmore
    private boolean isLoading;
    private boolean isLastPage;
    private int totalPage = 5;
    private int currentPage = 1;

    View view;
    public HomeFragment() {
        // Required empty public constructor
    }



    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_home, container, false);
        getActivity().getWindow().setSoftInputMode(
                WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);
        initUi();

        setImageUser();
        // set border image
        imgUser.setClipToOutline(true);
        imgUser.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getContext(), InformationUserActivity.class);
                startActivity(intent);
            }
        });


        ArrayAdapter<String> aadapter = new ArrayAdapter<String>(getContext()
                ,android.R.layout.simple_list_item_1,getResources().getStringArray(R.array.numbers));
        aadapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerSort.setAdapter(aadapter);
        spinnerSort.setOnItemSelectedListener(this);

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


        mRecyclerView = view.findViewById(R.id.rcv_all_product);
        mRecyclerView.setHasFixedSize(true);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

        GridLayoutManager gridLayoutManager = new GridLayoutManager(getContext(), 2);
        mRecyclerView.setLayoutManager(gridLayoutManager);




        return view;
    }


    private void initUi() {
        roundedImageView = view.findViewById(R.id.pizza);
        tvHiName = view.findViewById(R.id.tv_hi_name);
        searchView = view.findViewById(R.id.search);
        imgUser = view.findViewById(R.id.img_user);
        spinnerSort = view.findViewById(R.id.spn_sort);
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        String t = parent.getItemAtPosition(position).toString();
        String a = "Cheap to ex";
        String b = "Ex to cheap";
        String c = "Filter";
        if (t.equals(a)){
            sortAsc();
        }
        if (t.equals(b)){
            sortDesc();
        }
        if (t.equals(c)){
            getAllProduct();
        }
    }




    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }

    private void sortAsc() {
        Call<ResponseBodyProduct> responseDTOCall = ApiClient.getProductService().sortProductAsc(
                "Bearer " + StoreUtil.get(getContext(), Contants.accessToken));
        responseDTOCall.enqueue(new Callback<ResponseBodyProduct>() {
            @Override
            public void onResponse(Call<ResponseBodyProduct> call, Response<ResponseBodyProduct> response) {
                mitemPizzaAdappter = new ItemProductAdappter(getContext(),  response.body().getData());
                mRecyclerView.setAdapter(mitemPizzaAdappter);
                mitemPizzaAdappter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ResponseBodyProduct> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }

    private void sortDesc() {
        Call<ResponseBodyProduct> responseDTOCall = ApiClient.getProductService().sortProductDesc(
                "Bearer " + StoreUtil.get(getContext(), Contants.accessToken));
        responseDTOCall.enqueue(new Callback<ResponseBodyProduct>() {
            @Override
            public void onResponse(Call<ResponseBodyProduct> call, Response<ResponseBodyProduct> response) {
                mitemPizzaAdappter = new ItemProductAdappter(getContext(),  response.body().getData());
                mRecyclerView.setAdapter(mitemPizzaAdappter);
                mitemPizzaAdappter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ResponseBodyProduct> call, Throwable t) {
                t.printStackTrace();
            }
        });
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
        mitemItemFoodList = new ArrayList<>();
        mRequestQueue = Volley.newRequestQueue(getContext());
        getAllProduct();
    }

    private void setImageUser() {
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
    }


    private void getAllProduct() {
        String url = "http://192.168.1.5:5000/product/";
        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
                new com.android.volley.Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("data");

                            for (int i = 0; i < jsonArray.length(); i++) {
                                JSONObject dt = jsonArray.getJSONObject(i);
                                int productId = dt.getInt("id");
                                String productName = dt.getString("tensp");
                                String productImage = dt.getString("url");
                                int productPrice = dt.getInt("gia");
                                String productDetail = dt.getString("chitiet");
                                String productSize = dt.getString("size");
                                mitemItemFoodList.add(new ItemFood(productId,productName,productPrice,productImage,productDetail,productSize));
                            }
                            mitemPizzaAdappter = new ItemProductAdappter(getActivity(), mitemItemFoodList);
                            mRecyclerView.setAdapter(mitemPizzaAdappter);

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }

                    }
                },
                new com.android.volley.Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                });
        mRequestQueue.add(request);
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
        for (ItemFood item : mitemItemFoodList) {
            if (item.getTensp().toUpperCase().contains(text.toUpperCase())) {
                filteredList.add(item);
            }
        }
        mitemPizzaAdappter.filterList(filteredList);
    }


}