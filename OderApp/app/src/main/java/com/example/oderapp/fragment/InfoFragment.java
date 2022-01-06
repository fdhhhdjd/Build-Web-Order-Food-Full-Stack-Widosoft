package com.example.oderapp.fragment;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.CookieSyncManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.example.oderapp.R;
import com.example.oderapp.activities.AddAddressActivity;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.FirstScreenActivity;
import com.example.oderapp.activities.Login;
import com.example.oderapp.activities.PaymentActivity;
import com.example.oderapp.fragmentinfo.SendEmailActivity;
import com.example.oderapp.fragmentinfo.AboutUs;
import com.example.oderapp.fragmentinfo.Account;
import com.example.oderapp.fragmentinfo.FAQ;
import com.example.oderapp.fragmentinfo.Recruiment;
import com.example.oderapp.fragmentinfo.TermsAndCondition;
import com.example.oderapp.model.response.RefreshTokenRespone;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.model.response.ResponseBodyCart;
import com.example.oderapp.model.response.ResponseDTO;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;

import java.util.HashMap;
import java.util.Map;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class InfoFragment extends Fragment {

    private LinearLayout myaccount;
    private LinearLayout recruiment;
    private LinearLayout faq;
    private LinearLayout termsandcondition;
    private LinearLayout aboutus;
    private LinearLayout share;
    private LinearLayout rate;
    private LinearLayout sendEmail;
    private LinearLayout logout;

    public InfoFragment() {

    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_info, container, false);

        // khai bao id
        myaccount = view.findViewById(R.id.my_account);
        recruiment = view.findViewById(R.id.recruiment);
        faq = view.findViewById(R.id.faq);
        termsandcondition = view.findViewById(R.id.terms_and_condition);
        aboutus = view.findViewById(R.id.about_us);
        share = view.findViewById(R.id.share);
        rate = view.findViewById(R.id.rate);
        sendEmail = view.findViewById(R.id.send_email);
        logout = view.findViewById(R.id.logout);



        // open activity Account
        myaccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), Account.class);
                startActivity(intent);
            }
        });

        // open activity recruiment
        recruiment.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), Recruiment.class);
                startActivity(intent);
            }
        });

        // open activity faq
        faq.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), FAQ.class);
                startActivity(intent);
            }
        });

        // open activity termsandcondition
        termsandcondition.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), TermsAndCondition.class);
                startActivity(intent);
            }
        });

        // open activity aboutus
        aboutus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), AboutUs.class);
                startActivity(intent);
            }
        });

        // share app
        share.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Intent.ACTION_SEND);
                intent.setType("text/plain");
                String Body = "Download this App";
                String Sub = "http://play.google.com";
                intent.putExtra(Intent.EXTRA_TEXT,Body);
                intent.putExtra(Intent.EXTRA_TEXT,Sub);
                startActivity(Intent.createChooser(intent,"Share using"));
            }
        });

        // open app trên CH Play để người dùng có thể đánh giá app
        rate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String appPackageName = "com.facebook.katana&hl=vi&gl=US"; // getPackageName() from Context or Activity object
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + appPackageName)));
                } catch (android.content.ActivityNotFoundException anfe) {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/apps/details?id=" + appPackageName)));
                }
            }
        });

        sendEmail.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent itsendEmail = new Intent(getActivity(), SendEmailActivity.class);
                startActivity(itsendEmail);
            }
        });

        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                HashMap<String, String> hashMap = new HashMap<>();
//                hashMap.put(Contants.refreshToken, "Bearer " + StoreUtil.get(getContext(), Contants.refreshToken));
//                hashMap.put(Contants.contentType, "application/json");

//                Call<ResponseDTO> loginResponeCall = ApiClient.getService().deleteUser();
//                loginResponeCall.enqueue(new Callback<ResponseDTO>() {
//                    @Override
//                    public void onResponse(Call<ResponseDTO> call, Response<ResponseDTO> response) {
//                        Toast.makeText(getContext(), "OK", Toast.LENGTH_SHORT).show();
//                    }
//
//                    @Override
//                    public void onFailure(Call<ResponseDTO> call, Throwable t) {
//                        Toast.makeText(getContext(), "ERROR", Toast.LENGTH_SHORT).show();
//
//                    }
//                });



                final Dialog dialog = new Dialog(v.getContext());
                dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                dialog.setContentView(R.layout.dialog_confirm_logout);

                Window window = dialog.getWindow();
                if (window == null) {
                    return;
                }

                window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                WindowManager.LayoutParams windowAtribute = window.getAttributes();
                window.setAttributes(windowAtribute);


                Button btnCancel = dialog.findViewById(R.id.btn_cancel);
                Button btnLogout = dialog.findViewById(R.id.btn_logout);

                btnCancel.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
                // show dialog
                dialog.show();
                btnLogout.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        SharedPreferences settings = getContext().getSharedPreferences("MySharedPref", Context.MODE_PRIVATE);
                        settings.edit().clear().commit();
                        getActivity().finish();
                    }
                });
            }
        });


        return view;
    }


//    public void deleteInfo() {
//        HashMap<String, String> hashMap = new HashMap<>();
//        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(getActivity(), Contants.accessToken));
//        Call<ResponseDTO> loginResponeCall = ApiClient.getService().deleteUser(
//                "Bearer " + StoreUtil.get(getActivity(), Contants.accessToken));
//        loginResponeCall.enqueue(new Callback<ResponseDTO>() {
//            @Override
//            public void onResponse(Call<ResponseDTO> call, Response<ResponseDTO> response) {
//
//            }
//
//            @Override
//            public void onFailure(Call<ResponseDTO> call, Throwable t) {
//
//            }
//        });
//    }


}