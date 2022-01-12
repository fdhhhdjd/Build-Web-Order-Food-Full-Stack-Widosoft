package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.oderapp.R;
import com.example.oderapp.fragmentinfo.optionaccount.UpdateInformationActivity;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.StoreUtil;
import com.google.type.DateTime;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class InformationUserActivity extends AppCompatActivity {

    private ImageView imgUser;
    private TextView tvFullName;
    private TextView tvUserName;
    private TextView tvPhoneNumber;
    private TextView tvSex;
    private TextView tvDateOfBirth;
    private TextView tvEmail;
    private Button btn_update;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_information_user);
        initUi();
        getData();
        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(InformationUserActivity.this,UpdateInformationActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    private void initUi() {
        imgUser = findViewById(R.id.img_user);
        tvFullName = findViewById(R.id.tv_full_name_user);
        tvUserName = findViewById(R.id.tv_user_name_user);
        tvPhoneNumber = findViewById(R.id.tv_phone_number);
        tvSex = findViewById(R.id.tv_sex);
        tvDateOfBirth = findViewById(R.id.tv_date_of_birth);
        tvEmail = findViewById(R.id.tv_email);
        btn_update = findViewById(R.id.buttonUpdate);
    }
    public void getData() {
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer " + StoreUtil.get(InformationUserActivity.this, "Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, Response<ResponseInformationUser> response) {
                InformationUser informationUser = response.body().getData().get(0);
                tvFullName.setText(informationUser.getHoten());
                tvUserName.setText(informationUser.getUsername());
                tvEmail.setText(informationUser.getEmail());
                String string = informationUser.getNgaysinh();
                String[] parts = string.split("T");
                String part1 = parts[0]; // 004
                tvDateOfBirth.setText(part1);
                String im = informationUser.getUrl();
                if (im.isEmpty()) {
                    imgUser.setImageResource(R.drawable.user);
                }else{
                    Glide.with(getApplicationContext())
                            .load(im)
                            .into(imgUser);
                }
                if (informationUser.getGioitinh() == 1) {
                    tvSex.setText("Male");
                } else {
                    tvSex.setText("Female");
                }
            }

            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });
    }
}