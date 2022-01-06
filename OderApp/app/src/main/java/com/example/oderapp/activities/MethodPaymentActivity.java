package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import com.example.oderapp.R;
import com.example.oderapp.adapters.AddressAdapter;
import com.example.oderapp.adapters.ItemCartAdappter;
import com.example.oderapp.adapters.MethodOfPaymentAdappter;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.MethodOfPayment;
import com.example.oderapp.model.response.ResponseBodyCart;
import com.example.oderapp.model.response.ResponseBodyMethodOfPayment;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MethodPaymentActivity extends AppCompatActivity {
    private RecyclerView mRecyclerView;
    private ImageView imgBack;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_method_payment);
        initUi();
        getMethodOfPayment();


        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });


    }

    private void initUi() {
        imgBack = findViewById(R.id.img_back);
        mRecyclerView = findViewById(R.id.rcv_method);
    }
    @Override
    public void onBackPressed()
    {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    private void getMethodOfPayment() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(MethodPaymentActivity.this, Contants.accessToken));

        Call<ResponseBodyMethodOfPayment> responseBodyMethodOfPaymentCall = ApiClient.getService().getListMethodOfPayment(hashMap);
        responseBodyMethodOfPaymentCall.enqueue(new Callback<ResponseBodyMethodOfPayment>() {
            @Override
            public void onResponse(Call<ResponseBodyMethodOfPayment> call, Response<ResponseBodyMethodOfPayment> response) {
                MethodOfPaymentAdappter adappter = new MethodOfPaymentAdappter( response.body().getData(),MethodPaymentActivity.this);
                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(MethodPaymentActivity.this));
            }

            @Override
            public void onFailure(Call<ResponseBodyMethodOfPayment> call, Throwable t) {
                t.printStackTrace();
            }
        });

    }

}