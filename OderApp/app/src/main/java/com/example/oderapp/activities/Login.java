package com.example.oderapp.activities;

import android.content.Intent;
import android.content.SharedPreferences;
import android.media.Image;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.oderapp.R;
import com.example.oderapp.model.response.RefreshTokenRespone;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class Login extends AppCompatActivity {

    private Button signin;
    private TextView tvcreate_account;
    private TextView tvForgotPassword;
    private EditText edtEmail;
    private EditText edtPass;
    private ImageView imgRegisterGoogle;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        initUi();

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loginUser();
            }

        });

        tvcreate_account.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Login.this, SignUp.class);
                startActivity(intent);
            }
        });

        tvForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Login.this, ForgotPassword.class);
                startActivity(intent);
            }
        });

        imgRegisterGoogle.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intentgg = new Intent(Login.this, RegisterGoogleActivity.class);
                startActivity(intentgg);
            }
        });
    }

    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    public void initUi() {
        signin = findViewById(R.id.btnSignIn);
        tvcreate_account = findViewById(R.id.tvCreateNewAccount);
        edtEmail = findViewById(R.id.inputEmail);
        edtPass = findViewById(R.id.inputPassword);
        tvForgotPassword = findViewById(R.id.tv_forgot_password);
        imgRegisterGoogle = findViewById(R.id.img_register_google);
    }

    public void loginUser() {
        String email = edtEmail.getText().toString();
        String pass = edtPass.getText().toString();
        LoginRequest loginRequest = new LoginRequest(email, pass);
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.contentType, "application/json");
        hashMap.put(Contants.contentLength, "<calculated when request is sent>");
        if (TextUtils.isEmpty(edtEmail.getText().toString()) || TextUtils.isEmpty(edtPass.getText().toString())) {
            String message = "Email or password blank...";
            Toast.makeText(Login.this, message, Toast.LENGTH_SHORT).show();
        } else {
            Call<LoginRespone> loginResponeCall = ApiClient.getService().loginUser(hashMap, loginRequest);

            loginResponeCall.enqueue(new Callback<LoginRespone>() {
                @Override
                public void onResponse(Call<LoginRespone> call, Response<LoginRespone> response) {
                    if (response.body().getStatus() == 200) {
                        StoreUtil.save(Login.this, Contants.accessToken, response.body().getAccessToken());
                        StoreUtil.save(Login.this, Contants.refreshToken, response.body().getRefreshToken());
                            Intent intentslide = new Intent(Login.this, SliderActivity.class);
                            startActivity(intentslide);
                            finish();
                    } else {
                        String message = response.body().getMessage();
                        Toast.makeText(Login.this, message, Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<LoginRespone> call, Throwable t) {

                }
            });
        }



    }



}

