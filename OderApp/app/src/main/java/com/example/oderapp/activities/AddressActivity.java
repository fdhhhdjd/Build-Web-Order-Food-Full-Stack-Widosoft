package com.example.oderapp.activities;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.example.oderapp.R;
import com.example.oderapp.adapters.AddressAdapter;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddressActivity extends AppCompatActivity{
    private RecyclerView mRecyclerView;
    private ImageView imgBack;
    private ImageView imgAddAddress;
    private SwipeRefreshLayout swipeRefreshLayout;
    private AddressAdapter adappter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_address);
        initUi();
        getListAddress();


        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        imgAddAddress.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itAddress = new Intent(AddressActivity.this, AddAddressActivity.class);
                startActivity(itAddress);
            }
        });
        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                getListAddress();
                Handler handler = new Handler();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        swipeRefreshLayout.setRefreshing(false);
                    }
                },1000);
            }
        });
//
//
    }

    //
    private void initUi() {
        imgBack = findViewById(R.id.img_back);
        imgAddAddress = findViewById(R.id.img_add_address);
        mRecyclerView = findViewById(R.id.rcv_address);
        swipeRefreshLayout = findViewById(R.id.refresh);
    }

    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    private void getListAddress() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(AddressActivity.this, Contants.accessToken));

        Call<ResponseBodyAddress> responseDTOCall = ApiClient.getService().getListAddress(hashMap);
        responseDTOCall.enqueue(new Callback<ResponseBodyAddress>() {
            @Override
            public void onResponse(Call<ResponseBodyAddress> call, Response<ResponseBodyAddress> response) {
                adappter = new AddressAdapter( response.body().getData(),AddressActivity.this);

                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(AddressActivity.this));
            }

            @Override
            public void onFailure(Call<ResponseBodyAddress> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }

}