package com.example.oderapp.activities;


import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.oderapp.R;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.Note;
import com.example.oderapp.model.ResponseBodyDTO;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class DetailActivity extends AppCompatActivity {

    private ImageView imageao;
    private TextView tvname;
    private TextView tvprice;
    private TextView tvsize;
    private EditText edtNote;
    ItemFood item;
    private TextView tvDetailDescription;

    private ImageView imageBack;
    private Button btn_buy_now;
    private ProgressBar progressBar;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

//            Intent i = getIntent();
//            String s =  i.getStringExtra("key");
//            Toast.makeText(DetailActivity.this,"tui nef" + s, Toast.LENGTH_LONG).show();


        initUI();
        Bundle bundle = getIntent().getExtras();

        if (bundle != null) {
            item = (ItemFood) bundle.get("object");
            Picasso.with(this)
                    .load(item.getUrl()).fit().centerInside().into(imageao);
             tvname.setText(item.getTensp());
            tvprice.setText(String.valueOf(item.getGia()));
            tvDetailDescription.setText(item.getChitiet());
            tvsize.setText(item.getSize());
//        tvid.setText(String.valueOf(item.getId()));
        }

        btn_buy_now.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Sprite foldingCube = new FoldingCube();
                progressBar.setIndeterminateDrawable(foldingCube);
                progressBar.setVisibility(View.VISIBLE);

                CountDownTimer countDownTimer = new CountDownTimer(3000,1000) {
                    @Override
                    public void onTick(long millisUntilFinished) {
                        int current = progressBar.getProgress();
                        if (current >= progressBar.getMax()){
                            current = 0;
                        }
                        progressBar.setProgress(current + 10);
                    }
                    @Override
                    public void onFinish() {
                        progressBar.setVisibility(View.INVISIBLE);
                    }
                };
                countDownTimer.start();


                String note = edtNote.getText().toString();
                Note nt = new Note(note);
                Call<ResponseBodyDTO> loginResponeCall = ApiClient.getProductService().insertCart(item.getId(),
                        "Bearer " + StoreUtil.get(DetailActivity.this, Contants.accessToken),nt);
                loginResponeCall.enqueue(new Callback<ResponseBodyDTO>() {
                    @Override
                    public void onResponse(Call<ResponseBodyDTO> call, Response<ResponseBodyDTO> response) {
                    }

                    @Override
                    public void onFailure(Call<ResponseBodyDTO> call, Throwable t) {

                    }
                });
            }
        });

        imageBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

    }


    @Override
    public void onBackPressed()
    {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    private void initUI() {
        imageao = findViewById(R.id.img_detail_pizza);
//        tvid = findViewById(R.id.tv_id);
        tvname = findViewById(R.id.tv_detail_name);
        tvprice = findViewById(R.id.tv_detail_price);
        tvsize = findViewById(R.id.tv_detail_size);
        tvDetailDescription = findViewById(R.id.tv_detail_description);
        edtNote = findViewById(R.id.edt_note);
        imageBack = findViewById(R.id.back);
        btn_buy_now = findViewById(R.id.btn_buy);
        progressBar = findViewById(R.id.spin_kit);
    }

}