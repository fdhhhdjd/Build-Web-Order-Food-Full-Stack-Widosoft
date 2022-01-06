package com.example.oderapp.fragmentinfo;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.oderapp.R;

public class SendEmailActivity extends AppCompatActivity {
    EditText etSubject,etMessage;
    TextView tvTo;
    Button btsend;
    private ImageView imgBack;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_send_email);

        initUi();

        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        btsend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Intent.ACTION_SEND
                        , Uri.parse("mailto:"+tvTo.getText().toString()));
                intent.putExtra(Intent.EXTRA_EMAIL,tvTo.getText().toString());
                intent.putExtra(Intent.EXTRA_SUBJECT,etSubject.getText().toString());
                intent.putExtra(Intent.EXTRA_TEXT,etMessage.getText().toString());
                intent.setType("message/rfc822");
                startActivity(Intent.createChooser(intent,"Choose an email client"));
            }
        });
    }
    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    private void initUi() {
        etSubject = findViewById(R.id.et_subject);
        etMessage = findViewById(R.id.et_message);
        tvTo = findViewById(R.id.tv_to);
        btsend = findViewById(R.id.bt_send);
        imgBack = findViewById(R.id.img_back);
    }


}



