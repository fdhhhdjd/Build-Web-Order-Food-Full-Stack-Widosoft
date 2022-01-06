package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.oderapp.R;
import com.example.oderapp.model.Hot;

import org.w3c.dom.Text;

public class HotThisMonthDetail extends AppCompatActivity {
    private ImageView imgHot;
    private TextView tvNameHot;
    private TextView tvDate;
    private TextView tvDetail;
    private TextView tvTime;
    private Button btnGet_qrcode;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hot_this_month_detail);
        initUi();


        Bundle bundle =getIntent().getExtras();
        if(bundle == null){
            return;
        }
        Hot hot = (Hot) bundle.get("object");
        imgHot.setImageResource(hot.getImage());
        tvNameHot.setText(hot.getName());
        tvDate.setText(hot.getDate());
        tvDetail.setText(hot.getDetail());
        tvTime.setText(hot.getTime());

        btnGet_qrcode.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HotThisMonthDetail.this,QRCode.class);
                startActivity(intent);
            }
        });

    }

    private void initUi() {
        imgHot = findViewById(R.id.img_hot_detail);
        tvNameHot = findViewById(R.id.tv_name_detail);
        tvDate = findViewById(R.id.tv_date);
        tvDetail = findViewById(R.id.tv_detail);
        tvTime = findViewById(R.id.tv_time);
        btnGet_qrcode = findViewById(R.id.btn_get_qrcode);
    }

}