package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.eventbus.EvenbusAddress;
import com.example.oderapp.eventbus.EvenbusMethodPayment;
import com.example.oderapp.fragmentinfo.optionaccount.ChangePasswordActivity;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.ItemBill;
import com.example.oderapp.model.MethodOfPayment;
import com.example.oderapp.model.QuantilyAndPrice;
import com.example.oderapp.model.Voucher;
import com.example.oderapp.model.request.VoucherRequest;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.model.response.ResponseBodyBill;
import com.example.oderapp.model.response.ResponseBodyQuantilyAndPrice;
import com.example.oderapp.model.response.ResponseBodyVoucher;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PaymentActivity extends AppCompatActivity {
    private ImageView lnAddress;
    private LinearLayout lnMethod;
    private ImageView imgBack;
    private TextView tvAddress;
    private TextView tvIdAddress;
    private TextView tvNameOfMethodOfPayment;
    private TextView tvIdMethod;
    private TextView tvFullName;
    private TextView tvSdt;

    private TextView tvQuantily;
    private TextView tvCoupon;
    private TextView tvTotal;
    private TextView tvPrice;

    private EditText edtVoucherCode;
    private Button btnCheckVoucher;
    private Button btnBuyNow;
    Address address;
    ItemBill itemBill;
    MethodOfPayment methodOfPayment;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
        initUi();
        getData();
        getQuantilyAndPrice();

        EventBus.getDefault().register(this);

        lnAddress.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itAddress = new Intent(PaymentActivity.this, AddressActivity.class);
                startActivity(itAddress);
            }
        });

        lnMethod.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itMethod = new Intent(PaymentActivity.this, MethodPaymentActivity.class);
                startActivity(itMethod);
            }
        });
        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        btnCheckVoucher.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                HashMap<String, String> hashMap = new HashMap<>();
                hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(PaymentActivity.this, Contants.accessToken));

                String voucher = edtVoucherCode.getText().toString();
                if (voucher.isEmpty() || (!"Coupon5".equals(voucher) && !"Coupon10".equals(voucher))) {
                    final Dialog dialog = new Dialog(v.getContext());
                    dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                    dialog.setContentView(R.layout.dialog_not_voucher);
                    Window window = dialog.getWindow();
                    if (window == null) {
                        return;
                    }
                    window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                    window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                    WindowManager.LayoutParams windowAtribute = window.getAttributes();
                    window.setAttributes(windowAtribute);
                    Button btnContinue = dialog.findViewById(R.id.btn_continue);
                    btnContinue.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            dialog.dismiss();
                        }
                    });
                    // show dialog thanks
                    dialog.show();

                    voucher = "Coupon0";
                }
                Call<ResponseBodyVoucher> addAddressResponeCall = ApiClient.getService().getVoucher(
                        voucher, hashMap);
                addAddressResponeCall.enqueue(new Callback<ResponseBodyVoucher>() {
                    @Override
                    public void onResponse(Call<ResponseBodyVoucher> call, Response<ResponseBodyVoucher> response) {
                        Voucher vc = response.body().getData().get(0);
                        String a = "Coupon0";
                        if (vc.getId().equals(a)) {
                            tvCoupon.setText("0");
                        } else {
                            tvCoupon.setText(vc.getId());
                        }
                        int giatri = vc.getGiatri();
                        float tam = 0;
                        float kq = 0;
                        int price = Integer.parseInt(tvPrice.getText().toString());
                        tam = (price * giatri)/100;
                        kq = price - tam;
                        tvTotal.setText(String.valueOf(kq));
                    }

                    @Override
                    public void onFailure(Call<ResponseBodyVoucher> call, Throwable t) {

                    }
                });

//                String code = edtVoucherCode.getText().toString();
//                String coupon5 = "Coupon5";
//                String coupon10 ="Coupon10";
//                if (code.equals(coupon5) || code.equals(coupon10)){
//                    tvCoupon.setText(code);
//                }else{
//                    tvCoupon.setText("");
//                }
            }
        });
        btnBuyNow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (TextUtils.isEmpty(tvIdAddress.getText().toString().trim()) || TextUtils.isEmpty(tvIdMethod.getText().toString().trim())) {
                    Toast.makeText(PaymentActivity.this, "Your address or method is blank", Toast.LENGTH_SHORT).show();
                } else {
                    View viewdialog = getLayoutInflater().inflate(R.layout.dialog_confirm_order, null);
                    BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(PaymentActivity.this);
                    bottomSheetDialog.setContentView(viewdialog);
                    bottomSheetDialog.show();

                    Button btnConfirm = viewdialog.findViewById(R.id.btn_confirm_order);
                    Button btnCancel = viewdialog.findViewById(R.id.btn_cancel);
                    btnCancel.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            bottomSheetDialog.dismiss();
                        }
                    });

                    btnConfirm.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            int IdAddress = Integer.parseInt(tvIdAddress.getText().toString());
                            int IdMethod = Integer.parseInt(tvIdMethod.getText().toString());
                            String voucherCode = edtVoucherCode.getText().toString();
                            String coupon5 = "Coupon5";
                            String coupon10 = "Coupon10";
                            String ok;
                            if (voucherCode.equals(coupon5) ||
                                    voucherCode.equals(coupon10)) {
                                ok = voucherCode;
                            } else {
                                ok = "Coupon0";
                            }

                            itemBill = new ItemBill(IdMethod, IdAddress, ok);
                            HashMap<String, String> hashMap = new HashMap<>();
                            hashMap.put(Contants.contentLength, "<calculated when request is sent>");
                            hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(PaymentActivity.this, Contants.accessToken));
                            Call<ResponseBodyBill> responseBodyBillCall = ApiClient.getService().createBill(hashMap, itemBill);

                            responseBodyBillCall.enqueue(new Callback<ResponseBodyBill>() {
                                @Override
                                public void onResponse(Call<ResponseBodyBill> call, Response<ResponseBodyBill> response) {
                                }

                                @Override
                                public void onFailure(Call<ResponseBodyBill> call, Throwable t) {

                                }
                            });
                            bottomSheetDialog.dismiss();
                            // dialog thanks
                            final Dialog dialog = new Dialog(v.getContext());
                            dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                            dialog.setContentView(R.layout.dialog_thank_you);

                            Window window = dialog.getWindow();
                            if (window == null) {
                                return;
                            }

                            window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                            window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                            WindowManager.LayoutParams windowAtribute = window.getAttributes();
                            window.setAttributes(windowAtribute);


                            Button btnContinue = dialog.findViewById(R.id.btn_continue);

                            btnContinue.setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    onBackPressed();
                                }
                            });
                            // show dialog thanks
                            dialog.show();
                        }
                    });
                }
            }
        });



    }

    public void initUi() {
        lnAddress = findViewById(R.id.img_address);
        lnMethod = findViewById(R.id.ln_choose_method);
        imgBack = findViewById(R.id.img_back);

        tvAddress = findViewById(R.id.tv_address);
        tvIdAddress = findViewById(R.id.tv_id_address);
        tvNameOfMethodOfPayment = findViewById(R.id.tv_name_of_method);
        tvIdMethod = findViewById(R.id.tv_id_method);
        tvQuantily = findViewById(R.id.tv_quantily_payment);
        tvCoupon = findViewById(R.id.tv_coupon_payment);
        tvTotal = findViewById(R.id.tv_total_payment);
        tvPrice = findViewById(R.id.tv_price_payment);
        edtVoucherCode = findViewById(R.id.edt_code);

        tvFullName = findViewById(R.id.tv_full_name);
        tvSdt = findViewById(R.id.tv_sdt);
        btnBuyNow = findViewById(R.id.btn_buy_now);
        btnCheckVoucher = findViewById(R.id.btn_check_voucher);
    }

    public void getData() {
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer " + StoreUtil.get(PaymentActivity.this, "Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, Response<ResponseInformationUser> response) {
                InformationUser informationUser = response.body().getData().get(0);
                tvFullName.setText(informationUser.getHoten());
                tvSdt.setText(informationUser.getDienthoai());
            }

            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });
    }

    public void getQuantilyAndPrice() {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(PaymentActivity.this, Contants.accessToken));

        Call<ResponseBodyQuantilyAndPrice> responseDTOCall = ApiClient.getProductService().getQuantilyAndPrice(hashMap);
        responseDTOCall.enqueue(new Callback<ResponseBodyQuantilyAndPrice>() {
            @Override
            public void onResponse(Call<ResponseBodyQuantilyAndPrice> call, Response<ResponseBodyQuantilyAndPrice> response) {
                QuantilyAndPrice quantilyAndPrice = response.body().getData().get(0);
                tvPrice.setText(String.valueOf(quantilyAndPrice.getTongtien_gh()));
                tvQuantily.setText(String.valueOf(quantilyAndPrice.getTong_sl()));
            }

            @Override
            public void onFailure(Call<ResponseBodyQuantilyAndPrice> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }

    @Subscribe
    public void onEvent(EvenbusMethodPayment event) {
        Log.d("hehe", "Even" + event.getId() + event.getName());
        tvIdMethod.setText(String.valueOf(event.getId()));
        tvNameOfMethodOfPayment.setText(event.getName());
    }

    @Subscribe
    public void onEvent(EvenbusAddress event) {
        Log.d("hehe", "Even" + event.getId() + event.getName());
        tvIdAddress.setText(String.valueOf(event.getId()));
        tvAddress.setText(event.getName());
    }

}