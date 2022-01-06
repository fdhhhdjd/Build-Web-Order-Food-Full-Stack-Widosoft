package com.example.oderapp.fragmentinfo.optionaccount;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.ForgotPassword;
import com.example.oderapp.activities.Login;
import com.example.oderapp.model.request.ChangePasswordRequest;
import com.example.oderapp.model.response.ResponseChangePasswordDTO;
import com.example.oderapp.model.response.ResponseDTO;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ChangePasswordActivity extends AppCompatActivity {
    private ImageView imgBack;
    private EditText edtNewPassword;
    private EditText edtConfirmNewPassword;
    private Button btnSavePassword;
    private ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_change_password);
        initUi();

        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        btnSavePassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String newpass = edtNewPassword.getText().toString();
                String confirmNewPass = edtConfirmNewPassword.getText().toString();
                ChangePasswordRequest changePasswordRequest = new ChangePasswordRequest(newpass, confirmNewPass);
                changpw(changePasswordRequest);
            }
        });

    }

    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    private void changpw(ChangePasswordRequest changePasswordRequest) {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(ChangePasswordActivity.this, Contants.accessToken));
        hashMap.put(Contants.contentType, "application/json");
        hashMap.put(Contants.contentLength, "<calculated when request is sent>");
        if (TextUtils.isEmpty(edtNewPassword.getText().toString()) || TextUtils.isEmpty(edtConfirmNewPassword.getText().toString())) {
            String message = "Email or password blank...";
            Toast.makeText(ChangePasswordActivity.this, message, Toast.LENGTH_SHORT).show();
        } else {
            Call<ResponseChangePasswordDTO> responseDTOCall = ApiClient.getService().changePasswordUser(hashMap, changePasswordRequest);
            responseDTOCall.enqueue(new Callback<ResponseChangePasswordDTO>() {
                @Override
                public void onResponse(Call<ResponseChangePasswordDTO> call, Response<ResponseChangePasswordDTO> response) {
                    btnSavePassword.setVisibility(View.INVISIBLE);
                    Sprite foldingCube = new FoldingCube();
                    progressBar.setIndeterminateDrawable(foldingCube);
                    progressBar.setVisibility(View.VISIBLE);

                    CountDownTimer countDownTimer = new CountDownTimer(3000, 1000) {
                        @Override
                        public void onTick(long millisUntilFinished) {
                            int current = progressBar.getProgress();
                            if (current >= progressBar.getMax()) {
                                current = 0;
                            }
                            progressBar.setProgress(current + 10);
                        }

                        @Override
                        public void onFinish() {
                            progressBar.setVisibility(View.INVISIBLE);
                            onBackPressed();
                        }
                    };
                    countDownTimer.start();
                }

                @Override
                public void onFailure(Call<ResponseChangePasswordDTO> call, Throwable t) {

                }
            });
        }
    }

    public void initUi() {
        imgBack = findViewById(R.id.back);
        edtNewPassword = findViewById(R.id.edt_new_password);
        edtConfirmNewPassword = findViewById(R.id.edt_confirm_new_password);
        btnSavePassword = findViewById(R.id.btn_save_new_password);
        progressBar = (ProgressBar) findViewById(R.id.spin_kit);
    }
}