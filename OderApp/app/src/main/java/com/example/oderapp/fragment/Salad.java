package com.example.oderapp.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.adapters.ItemProductAdappter;
import com.example.oderapp.model.response.ResponseBodyProduct;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Salad extends Fragment {
    private RecyclerView mRecyclerView;
    private ItemProductAdappter mitemPizzaAdappter;

    public Salad() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_salad, container, false);
        mRecyclerView = view.findViewById(R.id.rcv_salad);
        getSalad();
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getContext(), 2);
        mRecyclerView.setLayoutManager(gridLayoutManager);

        return view;
    }
    private void getSalad() {
        Call<ResponseBodyProduct> responseDTOCall = ApiClient.getProductService().getSalad(
                "Bearer " + StoreUtil.get(getContext(), Contants.accessToken));
        responseDTOCall.enqueue(new Callback<ResponseBodyProduct>() {
            @Override
            public void onResponse(Call<ResponseBodyProduct> call, Response<ResponseBodyProduct> response) {
                mitemPizzaAdappter = new ItemProductAdappter(getContext(),response.body().getData());
                mRecyclerView.setAdapter(mitemPizzaAdappter);
                mitemPizzaAdappter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ResponseBodyProduct> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }


}