package com.example.oderapp.activities;

import com.example.oderapp.api.ProductServer;
import com.example.oderapp.api.UserService;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiClient {
    public static Retrofit getRetrofit(){
        //http://192.168.1.2:5000/customer/login

        HttpLoggingInterceptor httpLoggingInterceptor = new HttpLoggingInterceptor();
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);

        OkHttpClient okHttpClient = new OkHttpClient.Builder().addInterceptor(httpLoggingInterceptor).build();
        Retrofit retrofit = new retrofit2.Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl("http://192.168.1.5:5000/")
                .client(okHttpClient)
                .build();

        return retrofit;
    }

    public static UserService getService(){
        UserService userService = getRetrofit().create(UserService.class);
        return userService;
    }

    public static ProductServer getProductService(){
        ProductServer userService = getRetrofit().create(ProductServer.class);
        return userService;
    }
}
