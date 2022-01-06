package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.adapters.ItemCartAdappter;
import com.example.oderapp.adapters.ItemDetailBillAdappter;
import com.example.oderapp.eventbus.EvenbusAddress;
import com.example.oderapp.eventbus.EvenbusMethodPayment;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.ItemBill;
import com.example.oderapp.model.ItemDetailBill;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.MethodOfPayment;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.model.response.ResponseBodyDetailBill;
import com.example.oderapp.model.response.ResponseBodyMethodOfPayment;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.squareup.picasso.Picasso;

import org.greenrobot.eventbus.EventBus;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class DetailBillActivity extends AppCompatActivity {
    private RecyclerView mRecyclerView;
    private ItemBill itemBill;
    private TextView tvQuantily;
    private TextView tvPrice;
    private TextView tvCoupon;
    private TextView tvTotalPrice;
    private TextView tvOrderDate;
    private TextView tvUserName;
    private TextView tvPhoneNumber;
    private TextView tvAddress;
    private TextView tvMethodPayment;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail_bill);
        initUi();

        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            itemBill = (ItemBill) bundle.get("bill");
        }

        getDetailBill();
        getInfoProfile();
        getAddress();
        getMethodPayment();

        tvPrice.setText(String.valueOf(itemBill.getTongtien_gh()));
        tvCoupon.setText(itemBill.getId_voucher());
        tvQuantily.setText(String.valueOf(itemBill.getTong_sl()));
        tvTotalPrice.setText(String.valueOf(itemBill.getTong_hd()));
    }

    private void initUi() {
        mRecyclerView = findViewById(R.id.rcv_detail_bill);
        tvTotalPrice = findViewById(R.id.tv_tongGia);
        tvOrderDate = findViewById(R.id.tv_order_date);
        tvQuantily = findViewById(R.id.tv_quantily_detail_bill);
        tvCoupon = findViewById(R.id.tv_coupon);
        tvPrice = findViewById(R.id.tv_price_detail_bill);
        tvUserName = findViewById(R.id.tv_user_name);
        tvAddress = findViewById(R.id.tv_address_detail_bill);
        tvPhoneNumber = findViewById(R.id.tv_phone_number_detail_bill);
        tvMethodPayment = findViewById(R.id.tv_method_payment_detail);
    }

    private void getDetailBill() {
        Call<ResponseBodyDetailBill> addAddressResponeCall = ApiClient.getService().getDetailBill(itemBill.getId(),
                "Bearer " + StoreUtil.get(DetailBillActivity.this, Contants.accessToken));
        addAddressResponeCall.enqueue(new Callback<ResponseBodyDetailBill>() {
            @Override
            public void onResponse(Call<ResponseBodyDetailBill> call, Response<ResponseBodyDetailBill> response) {
                ItemDetailBillAdappter adappter = new ItemDetailBillAdappter(DetailBillActivity.this, response.body().getData());
                mRecyclerView.setAdapter(adappter);
                mRecyclerView.setHasFixedSize(true);
                mRecyclerView.setLayoutManager(new LinearLayoutManager(DetailBillActivity.this));

                ItemDetailBill itemDetailBill = response.body().getData().get(0);
                tvOrderDate.setText(itemDetailBill.getCreatedAt());
            }

            @Override
            public void onFailure(Call<ResponseBodyDetailBill> call, Throwable t) {

            }
        });
    }

    public void getInfoProfile(){
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer "+ StoreUtil.get(DetailBillActivity.this,"Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, retrofit2.Response<ResponseInformationUser> response) {

                InformationUser informationUser = response.body().getData().get(0);
                tvUserName.setText(informationUser.getUsername());
                tvPhoneNumber.setText(informationUser.getDienthoai());
            }


            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });
    }

    public void getAddress(){
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(DetailBillActivity.this, Contants.accessToken));
        Call<ResponseBodyAddress> responseBodyAddressCall = ApiClient.getService().getAddress(itemBill.getId_diachi(),
                hashMap);
        responseBodyAddressCall.enqueue(new Callback<ResponseBodyAddress>() {
            @Override
            public void onResponse(Call<ResponseBodyAddress> call, Response<ResponseBodyAddress> response) {
                Address address = response.body().getData().get(0);
                tvAddress.setText(address.getDiachi());
            }

            @Override
            public void onFailure(Call<ResponseBodyAddress> call, Throwable t) {

            }
        });
    }
    public void getMethodPayment(){
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(DetailBillActivity.this, Contants.accessToken));

        Call<ResponseBodyMethodOfPayment> responseBodyMethodOfPaymentCall = ApiClient.getService().getMethodOfPayment(itemBill.getId_thanhtoan(),hashMap);
        responseBodyMethodOfPaymentCall.enqueue(new Callback<ResponseBodyMethodOfPayment>() {
            @Override
            public void onResponse(Call<ResponseBodyMethodOfPayment> call, Response<ResponseBodyMethodOfPayment> response) {
                MethodOfPayment methodOfPayment = response.body().getData().get(0);
                tvMethodPayment.setText(methodOfPayment.getTen_hinhthuc());
            }

            @Override
            public void onFailure(Call<ResponseBodyMethodOfPayment> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }
}