package com.example.oderapp.activities;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.preference.PreferenceManager;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

import com.example.oderapp.R;
import com.example.oderapp.model.response.RefreshTokenRespone;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class FirstScreenActivity extends AppCompatActivity {
    protected boolean _active = true;
    protected int _splashTime = 4000;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first_screen);

        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            public void run() {
                finish();


               SharedPreferences sharedPreferences = FirstScreenActivity.this.getSharedPreferences("MySharedPref", Context.MODE_PRIVATE);
                if (sharedPreferences.getString(Contants.refreshToken, "").isEmpty()){
                    Intent i3 = new Intent(FirstScreenActivity.this, Login.class);
                    startActivity(i3);
                }else{
//                    getReFreshToken();
                    Intent intentslide = new Intent(FirstScreenActivity.this, MainActivity.class);
                    startActivity(intentslide);
                    finish();
                }
            }
        }, _splashTime);


    }


    public void getReFreshToken(){
        Call<RefreshTokenRespone> refreshTokenResponeCall = ApiClient.getService().refreshToken(
                "refreshToken=" +StoreUtil.get(FirstScreenActivity.this, Contants.refreshToken));
        refreshTokenResponeCall.enqueue(new Callback<RefreshTokenRespone>() {
            @Override
            public void onResponse(Call<RefreshTokenRespone> call, Response<RefreshTokenRespone> response) {
                StoreUtil.save(FirstScreenActivity.this, Contants.accessToken, response.body().getAccessToken());
            }

            @Override
            public void onFailure(Call<RefreshTokenRespone> call, Throwable t) {

            }
        });
    }
}