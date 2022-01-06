package com.example.oderapp.fragment.BillAndRating;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.adapters.ItemBillAdapter;
import com.example.oderapp.model.response.ResponseBodyBill;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class BillFragment extends Fragment {

    private RecyclerView mRecyclerView;
    private View mview;

    public BillFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mview = inflater.inflate(R.layout.fragment_bill, container, false);
        mRecyclerView = mview.findViewById(R.id.rcv_bill);
        getAllBill();
        return mview;
    }

    private void getAllBill() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(getActivity(), Contants.accessToken));

        Call<ResponseBodyBill> responseBodyBillCall = ApiClient.getProductService().getAllBill(hashMap);
        responseBodyBillCall.enqueue(new Callback<ResponseBodyBill>() {
            @Override
            public void onResponse(Call<ResponseBodyBill> call, Response<ResponseBodyBill> response) {
                ItemBillAdapter adappter = new ItemBillAdapter(getContext(), response.body().getData());
                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
            }

            @Override
            public void onFailure(Call<ResponseBodyBill> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }
}