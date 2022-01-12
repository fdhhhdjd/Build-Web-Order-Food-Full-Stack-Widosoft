package com.example.oderapp.api;

import com.example.oderapp.activities.LoginRespone;
import com.example.oderapp.model.Currency;
import com.example.oderapp.model.GetItemCart;
import com.example.oderapp.model.GetProfile;
import com.example.oderapp.model.ItemCart;
import com.example.oderapp.model.User;
import com.example.oderapp.model.UserRegister;
import com.example.oderapp.model.response.ReponseUrl;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.HashMap;
import java.util.List;
import java.util.Observable;

import okhttp3.MultipartBody;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.HeaderMap;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface ApiService {
    // register with google
    @GET("auth/google")
    Call<LoginRespone> registerUsingGoogle(@HeaderMap HashMap<String, String> hashMap);
}
