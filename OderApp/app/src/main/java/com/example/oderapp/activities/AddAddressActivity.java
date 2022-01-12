package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.adapters.AddressAdapter;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.ResponseBodyDTO;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddAddressActivity extends AppCompatActivity {
    private EditText edtAddAddress;
    private ImageView imgBack;
    private Button btnAddAddress;
    private ProgressBar progressBar;
    Address address;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_address);
        initUi();


        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

            btnAddAddress.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    String add = edtAddAddress.getText().toString();
                    if (add.isEmpty()) {
                        Toast.makeText(AddAddressActivity.this, "Please insert your address", Toast.LENGTH_SHORT).show();
                    } else {
                        btnAddAddress.setVisibility(View.INVISIBLE);
                        addAddress();
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
                }
            });
        }


    private void initUi() {
        edtAddAddress = findViewById(R.id.edt_add_address);
        imgBack = findViewById(R.id.img_back_add_address);
        btnAddAddress = findViewById(R.id.btn_add_address);
        progressBar=  findViewById(R.id.spin_kit);
    }


    public void addAddress( ) {
        String strAddress = edtAddAddress.getText().toString();
        address = new Address(strAddress);
        Call<ResponseBodyAddress> addAddressResponeCall = ApiClient.getService().insertAddress(
                "Bearer " + StoreUtil.get(AddAddressActivity.this, Contants.accessToken),address);
        addAddressResponeCall.enqueue(new Callback<ResponseBodyAddress>() {
            @Override
            public void onResponse(Call<ResponseBodyAddress> call, Response<ResponseBodyAddress> response) {

            }

            @Override
            public void onFailure(Call<ResponseBodyAddress> call, Throwable t) {

            }
        });
    }
}