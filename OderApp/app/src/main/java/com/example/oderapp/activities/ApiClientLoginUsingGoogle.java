package com.example.oderapp.activities;

import com.example.oderapp.api.ApiService;
import com.example.oderapp.api.ProductServer;
import com.example.oderapp.api.UserService;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiClientLoginUsingGoogle {
    public static Retrofit getRetrofit(){
        //http://192.168.1.2:5000/customer/login

        HttpLoggingInterceptor httpLoggingInterceptor = new HttpLoggingInterceptor();
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);

        OkHttpClient okHttpClient = new OkHttpClient.Builder().addInterceptor(httpLoggingInterceptor).build();
        Retrofit retrofit = new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl("http://192.168.1.5:5000/")
                .client(okHttpClient)
                .build();

        return retrofit;
    }

    public static ApiService apiService(){
        ApiService userService = getRetrofit().create(ApiService.class);
        return userService;
    }
}
