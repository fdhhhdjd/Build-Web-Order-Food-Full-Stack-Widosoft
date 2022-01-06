package com.example.oderapp.fragmentinfo.optionaccount;

import android.Manifest;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.bumptech.glide.Glide;
import com.cloudinary.android.MediaManager;
import com.cloudinary.android.callback.ErrorInfo;
import com.cloudinary.android.callback.UploadCallback;
import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.api.ApiService;
import com.example.oderapp.api.Const;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.request.UserRequest;
import com.example.oderapp.model.response.ReponseUrl;
import com.example.oderapp.model.response.ResponseDTO;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.squareup.picasso.Picasso;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UpdateInformationActivity extends AppCompatActivity {
    private static final int MY_REQUEST_CODE = 10;
    public static final String TAG = UpdateInformationActivity.class.getName();
    private EditText edtHoTen;
    private EditText edtUserName;
    private EditText edtNgaySinh;
    private EditText edtDienThoai;
    private EditText edtUrl;
    private ImageView imgBack;
    private Button btnUpdate;
    private ImageView imgInfo;
    private Uri mUri;
    private ProgressDialog mProgressDialog;

    Button btnImage;

//    private static final String TAG = "Upload ###";
//    private static int IMAGE_REQ = 1;
//    private Uri imagePath;
//    Map config = new HashMap();

    int male = 0;
    private RadioGroup radioGroup;
    private RadioButton rdbMale;
    private RadioButton rdbFemale;

    // Use to load image
    private ActivityResultLauncher<Intent> mActivityResultLauncher = registerForActivityResult(
            new ActivityResultContracts.StartActivityForResult(),
            new ActivityResultCallback<ActivityResult>() {
                @Override
                public void onActivityResult(ActivityResult result) {
                    Log.e(TAG, "onActivityResult");
                    if (result.getResultCode() == Activity.RESULT_OK) {
                        Intent data = result.getData();
                        if (data == null) {
                            return;
                        }
                        Uri uri = data.getData();
                        mUri = uri;
                        try {
                            Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), uri);
                            imgInfo.setImageBitmap(bitmap);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            });


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_information);
        initUi();
        mProgressDialog = new ProgressDialog(this);
        mProgressDialog.setMessage("Please wait");
        getData();
//        initCongif();

        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });
        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                switch (checkedId) {
                    case R.id.Male:
                        male = 1;
                        break;
                    case R.id.Female:
                        male = 0;
                        break;
                }
            }
        });

        btnUpdate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String hoten = edtHoTen.getText().toString();
                String username = edtUserName.getText().toString();
                String ngaySinh = edtNgaySinh.getText().toString();
                String sdt = edtDienThoai.getText().toString();
                String url = edtUrl.getText().toString();

                UserRequest userRequest = new UserRequest(hoten, username, ngaySinh, male, sdt, url);
                updateInfo(userRequest);


                if (mUri != null) {
                    callApiRegisterAccount();
                }
                onBackPressed();

            }
        });
        imgInfo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onClickRequestPermission();
            }
        });

    }

    private void initUi() {
        btnImage = findViewById(R.id.buttonImage);
        imgInfo = findViewById(R.id.imgUserInfor);
        btnUpdate = findViewById(R.id.buttonUpdate);
        edtHoTen = findViewById(R.id.edt_ho_ten);
        edtUserName = findViewById(R.id.edt_username);
        edtNgaySinh = findViewById(R.id.edt_ngay_sinh);
        edtDienThoai = findViewById(R.id.edt_phone_number);
        edtUrl = findViewById(R.id.edt_url);
        radioGroup = findViewById(R.id.radioGroup);
        rdbMale = findViewById(R.id.Male);
        rdbFemale = findViewById(R.id.Female);

        imgBack = findViewById(R.id.back);
    }

    @Override
    public void onBackPressed() {
        // code here to show dialog
        super.onBackPressed();  // optional depending on your needs
    }

    // update
    public void updateInfo(UserRequest userRequest) {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(UpdateInformationActivity.this, Contants.accessToken));
        hashMap.put(Contants.contentLength, "<calculated when request is sent>");
        Call<ResponseDTO> loginResponeCall = ApiClient.getService().updateInfo(hashMap, userRequest);
        loginResponeCall.enqueue(new Callback<ResponseDTO>() {
            @Override
            public void onResponse(Call<ResponseDTO> call, Response<ResponseDTO> response) {
                Toast.makeText(UpdateInformationActivity.this, "Update Infomation is successful", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<ResponseDTO> call, Throwable t) {

            }
        });

        if (mUri != null){
            callApiRegisterAccount();
        }

    }


    // get data user profile
    public void getData() {
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer "+ StoreUtil.get(UpdateInformationActivity.this,"Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, Response<ResponseInformationUser> response) {
                InformationUser informationUser = response.body().getData().get(0);
                edtHoTen.setText(informationUser.getHoten());
                edtUserName.setText(informationUser.getUsername());
                edtNgaySinh.setText(informationUser.getNgaysinh());
                edtDienThoai.setText(informationUser.getDienthoai());
                edtUrl.setText(informationUser.getUrl());
                if (informationUser.getGioitinh() == 1) {
                    rdbMale.setChecked(true);
                } else {
                    rdbFemale.setChecked(true);
                }

                String im="";
                if (informationUser.getUrl().equals(im)) {
                    imgInfo.setImageResource(R.drawable.loadimage);
                }else{
                    Glide.with(getApplicationContext())
                            .load(informationUser.getUrl())
                            .into(imgInfo);
                }
            }

            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });
    }


    private void onClickRequestPermission() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            openGallery();
            return;
        }
        if (checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED) {
            openGallery();
        } else {
            String[] permission = {Manifest.permission.READ_EXTERNAL_STORAGE};
            requestPermissions(permission, MY_REQUEST_CODE);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == MY_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                openGallery();
            }
        }
    }

    private void openGallery() {
        Intent intent = new Intent();
        intent.setType("image/*");
        intent.setAction(Intent.ACTION_GET_CONTENT);
        mActivityResultLauncher.launch(Intent.createChooser(intent, "Select picture"));
    }

    private void callApiRegisterAccount() {
//        mProgressDialog.show();
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(Contants.accessToken,"Bearer " + StoreUtil.get(UpdateInformationActivity.this, Contants.accessToken));
        hashMap.put(Contants.contentType, "multipart/form-data; boundary=<calculated when request is sent>");
        hashMap.put(Contants.contentLength, "<calculated when request is sent>");

        String strRealPath = RealPathUtil.getRealPath(this, mUri);
        Log.e("Thainam", strRealPath);
        File file = new File(strRealPath);
        RequestBody requestBody = RequestBody.create(MediaType.parse("multipart/form-data"), file);

        MultipartBody.Part multipartBody = MultipartBody.Part.createFormData(Const.KEY_FILE, file.getName(), requestBody);
        Call<ReponseUrl> responseDTOCall = ApiClient.getService().uploadImage(hashMap, multipartBody);
        responseDTOCall.enqueue(new Callback<ReponseUrl>() {
            @Override
            public void onResponse(Call<ReponseUrl> call, Response<ReponseUrl> response) {
                mProgressDialog.dismiss();
//                ReponseUrl reponseUrl = response.body();
//                if (reponseUrl != null) {
//                    Glide.with(UpdateInformationActivity.this)
//                            .load(reponseUrl.getUrl())
//                            .into(imgInfo);
//                }
            }

            @Override
            public void onFailure(Call<ReponseUrl> call, Throwable t) {
                mProgressDialog.dismiss();
                Toast.makeText(UpdateInformationActivity.this, "Error", Toast.LENGTH_SHORT).show();
            }
        });
    }
}