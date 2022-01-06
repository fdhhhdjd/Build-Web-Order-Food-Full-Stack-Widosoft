package com.example.oderapp.fragment.BillAndRating;

import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.adapters.ItemBillAdapter;
import com.example.oderapp.adapters.ItemHistoryRatingAdapter;
import com.example.oderapp.model.response.ResponseBodyBill;
import com.example.oderapp.model.response.ResponseBodyRating;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RatingFragment extends Fragment {

    private RecyclerView mRecyclerView;
    private View mview;
    private SwipeRefreshLayout swipeRefreshLayout;

    public RatingFragment() {
        // Required empty public constructor
    }



    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mview = inflater.inflate(R.layout.fragment_rating, container, false);
        mRecyclerView = mview.findViewById(R.id.rcv_history_rating);
        swipeRefreshLayout = mview.findViewById(R.id.refresh);
        getAllHistoryRating();

        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                getAllHistoryRating();
                Handler handler = new Handler();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        swipeRefreshLayout.setRefreshing(false);
                    }
                },1000);
            }
        });
        return mview;
    }
    private void getAllHistoryRating() {
        Call<ResponseBodyRating> responseBodyBillCall = ApiClient.getService().getHistoryRating(
                "Bearer " + StoreUtil.get(getActivity(), Contants.accessToken));
        responseBodyBillCall.enqueue(new Callback<ResponseBodyRating>() {
            @Override
            public void onResponse(Call<ResponseBodyRating> call, Response<ResponseBodyRating> response) {
                ItemHistoryRatingAdapter adappter = new ItemHistoryRatingAdapter(getContext(), response.body().getData());
                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

            }

            @Override
            public void onFailure(Call<ResponseBodyRating> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }
}