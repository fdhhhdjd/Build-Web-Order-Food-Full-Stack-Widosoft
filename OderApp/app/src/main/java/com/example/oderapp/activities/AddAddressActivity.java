package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.adapters.AddressAdapter;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.ResponseBodyDTO;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddAddressActivity extends AppCompatActivity {
    private EditText edtAddAddress;
    private ImageView imgBack;
    private Button btnAddAddress;
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

//                int id = address.getId();
//                address = new Address(strAddress);
//                addAddress(address);
                addAddress();
                Toast.makeText(AddAddressActivity.this, "Added your address", Toast.LENGTH_LONG).show();

            }
        });
    }

    private void initUi() {
        edtAddAddress = findViewById(R.id.edt_add_address);
        imgBack = findViewById(R.id.img_back_add_address);
        btnAddAddress = findViewById(R.id.btn_add_address);
    }

    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }


    public void addAddress( ) {
        String strAddress = edtAddAddress.getText().toString();
        address = new Address(strAddress);
        Call<ResponseBodyAddress> addAddressResponeCall = ApiClient.getService().insertAddress(
                "Bearer " + StoreUtil.get(AddAddressActivity.this, Contants.accessToken),address);
        addAddressResponeCall.enqueue(new Callback<ResponseBodyAddress>() {
            @Override
            public void onResponse(Call<ResponseBodyAddress> call, Response<ResponseBodyAddress> response) {
                if (response.isSuccessful()) {
                    Toast.makeText(AddAddressActivity.this, "Added your address", Toast.LENGTH_LONG).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseBodyAddress> call, Throwable t) {

            }
        });
    }
}