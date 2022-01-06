package com.example.oderapp.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

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
import com.example.oderapp.adapters.ItemProductAdappter;
import com.example.oderapp.model.ItemFood;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class Appetizer extends Fragment {

    private RecyclerView mRecyclerView;
    private ItemProductAdappter mitemPizzaAdappter;
    private ArrayList<ItemFood> mitemPizzasList;
    private RequestQueue mRequestQueue;
    public Appetizer() {
        // Required empty public constructor
    }



    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_appertizer, container, false);
        mRecyclerView = view.findViewById(R.id.rcv_appertizer);
        mRecyclerView.setHasFixedSize(true);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getContext(), 2);
        mRecyclerView.setLayoutManager(gridLayoutManager);
        return view;
    }

    private void parseJSON() {
        String url = "http://192.168.1.5:5000/category/19";
        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
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
                                mitemPizzasList.add(new ItemFood(productId,productName,productPrice,productImage,productDetail,productSize));
                            }
                            mitemPizzaAdappter = new ItemProductAdappter(getActivity(), mitemPizzasList);
                            mRecyclerView.setAdapter(mitemPizzaAdappter);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                });
        mRequestQueue.add(request);
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mitemPizzasList = new ArrayList<>();
        mRequestQueue = Volley.newRequestQueue(getContext());
        parseJSON();


    }

}