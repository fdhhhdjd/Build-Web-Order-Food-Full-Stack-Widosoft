package com.example.oderapp.fragmentinfo;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.example.oderapp.R;
import com.example.oderapp.fragmentinfo.optionaccount.ChangePasswordActivity;
import com.example.oderapp.fragmentinfo.optionaccount.UpdateInformationActivity;


public class Account extends AppCompatActivity {
    private LinearLayout lnUpdateInformation;
    private LinearLayout lnChangePassword;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account);
        initUi();
        lnUpdateInformation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itUpdate = new Intent(Account.this, UpdateInformationActivity.class);
                startActivity(itUpdate);
            }
        });
        lnChangePassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itChangePW = new Intent(Account.this, ChangePasswordActivity.class);
                startActivity(itChangePW);
            }
        });
    }

    private void initUi() {
        lnUpdateInformation = findViewById(R.id.ln_update_information);
        lnChangePassword = findViewById(R.id.ln_change_password);
    }
}