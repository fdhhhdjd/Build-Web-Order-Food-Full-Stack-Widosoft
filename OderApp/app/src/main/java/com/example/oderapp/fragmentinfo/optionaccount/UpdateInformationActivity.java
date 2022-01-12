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
import android.os.CountDownTimer;
import android.provider.MediaStore;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
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
import com.example.oderapp.activities.Login;
import com.example.oderapp.api.ApiService;
import com.example.oderapp.api.Const;
import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.request.DeleteImage;
import com.example.oderapp.model.request.UserRequest;
import com.example.oderapp.model.response.ReponseDeleteImage;
import com.example.oderapp.model.response.ReponseUrl;
import com.example.oderapp.model.response.ResponseDTO;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;
import com.google.android.material.textfield.TextInputLayout;
import com.squareup.picasso.Picasso;

import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UpdateInformationActivity extends AppCompatActivity {
    private static final int MY_REQUEST_CODE = 23;
    public static final String TAG = UpdateInformationActivity.class.getName();
    private EditText edtHoTen;
    private EditText edtUserName;
    private EditText edtNgaySinh;
    private EditText edtDienThoai;

    private TextInputLayout tilFullName;
    private TextInputLayout tilUserName;
    private TextInputLayout tilDateofBirth;
    private TextInputLayout tilPhoneNumber;
    private TextView tvValidateSex;

    private ImageView imgBack;
    private Button btnUpdate;
    private ImageView imgInfo;
    private Uri mUri;
    RequestBody requestBody;
    private ProgressBar progressBar;
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
        getData();

        edtNgaySinh.addTextChangedListener(new TextWatcher() {
            private String current = "";
            private String ddmmyyyy = "YYYYMMDD";
            private Calendar cal = Calendar.getInstance();
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().equals(current)) {
                    String clean = s.toString().replaceAll("[^\\d.]", "");
                    String cleanC = current.replaceAll("[^\\d.]", "");

                    int cl = clean.length();
                    int sel = cl;
                    for (int i = 2; i <= cl && i < 6; i += 2) {
                        sel++;
                    }
                    //Fix for pressing delete next to a forward slash
                    if (clean.equals(cleanC)) sel--;

                    if (clean.length() < 8){
                        clean = clean + ddmmyyyy.substring(clean.length());
                    }else{
                        //This part makes sure that when we finish entering numbers
                        //the date is correct, fixing it otherwise
                        int day  = Integer.parseInt(clean.substring(6,8));
                        int mon  = Integer.parseInt(clean.substring(4,6));
                        int year = Integer.parseInt(clean.substring(0,4));

                        if(mon > 12) mon = 12;
                        cal.set(Calendar.MONTH, mon-1);

                        year = (year<1900)?1900:(year>2100)?2100:year;
                        cal.set(Calendar.YEAR, year);
                        // ^ first set year for the line below to work correctly
                        //with leap years - otherwise, date e.g. 29/02/2012
                        //would be automatically corrected to 28/02/2012

                        day = (day > cal.getActualMaximum(Calendar.DATE))? cal.getActualMaximum(Calendar.DATE):day;
                        clean = String.format("%02d%02d%02d",year, mon, day);
                    }

                    clean = String.format("%s-%s-%s", clean.substring(0, 4),
                            clean.substring(4, 6),
                            clean.substring(6, 8));

                    sel = sel < 0 ? 0 : sel;
                    current = clean;
                    edtNgaySinh.setText(current);
                    edtNgaySinh.setSelection(sel < current.length() ? sel : current.length());

                }
            }


            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            @Override
            public void afterTextChanged(Editable s) {}
        });

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
//                deleteImage();
                if (validateFullName() && validateUsername() && validateDateofBirth()
                        && validatePhoneNumber() && validateSex()) {
                    if (mUri != null) {
                        String strRealPath = RealPathUtil.getRealPath(getApplicationContext(), mUri);
                        File fileImage = new File(strRealPath);
                        requestBody = RequestBody.create(MediaType.parse(getContentResolver().getType(mUri)), fileImage);
                        MultipartBody.Part multipartBody = MultipartBody.Part.createFormData("file", fileImage.getName(), requestBody);

                        // get profile to get data public_id and url
                        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                                "Bearer " + StoreUtil.get(UpdateInformationActivity.this, "Authorization"));
                        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
                            @Override
                            public void onResponse(Call<ResponseInformationUser> call, retrofit2.Response<ResponseInformationUser> response) {
                                InformationUser informationUser = response.body().getData().get(0);
                                String url = informationUser.getUrl();
                                String public_id = informationUser.getPublic_id();
                                if (url.isEmpty() || public_id.isEmpty()) {
                                    // upload image
                                    Call<ReponseUrl> responseDTOCall = ApiClient.getService().uploadImage(
                                            "Bearer " + StoreUtil.get(UpdateInformationActivity.this, Contants.accessToken),
                                            multipartBody);
                                    responseDTOCall.enqueue(new Callback<ReponseUrl>() {
                                        @Override
                                        public void onResponse(Call<ReponseUrl> call, Response<ReponseUrl> response) {
                                            if (response.isSuccessful()) {
                                                String urll = response.body().getUrl();
                                                String public_id = response.body().getPublicId();
                                                String hoten = edtHoTen.getText().toString();
                                                String username = edtUserName.getText().toString();
                                                String ngaySinh = edtNgaySinh.getText().toString();
                                                String sdt = edtDienThoai.getText().toString();
                                                //upload information profile
                                                UserRequest userRequest = new UserRequest(hoten, username, ngaySinh, male, sdt, public_id, urll);
                                                updateInfo(userRequest);

                                                setprbar();
                                            }

                                        }

                                        @Override
                                        public void onFailure(Call<ReponseUrl> call, Throwable t) {
                                            Toast.makeText(UpdateInformationActivity.this, "Upload image is wrong", Toast.LENGTH_SHORT).show();
                                            onBackPressed();
                                        }
                                    });
                                }
                                // if public_id and url on server not null (have data), then delete this image and then upload new image.
                                else {
                                    //delete image
                                    deleteImage();

                                    // upload new image
                                    Call<ReponseUrl> responseDTOCall = ApiClient.getService().uploadImage(
                                            "Bearer " + StoreUtil.get(UpdateInformationActivity.this, Contants.accessToken),
                                            multipartBody);
                                    responseDTOCall.enqueue(new Callback<ReponseUrl>() {
                                        @Override
                                        public void onResponse(Call<ReponseUrl> call, Response<ReponseUrl> response) {
                                            if (response.isSuccessful()) {
                                                String urll = response.body().getUrl();
                                                String public_id = response.body().getPublicId();
                                                String hoten = edtHoTen.getText().toString();
                                                String username = edtUserName.getText().toString();
                                                String ngaySinh = edtNgaySinh.getText().toString();
                                                String sdt = edtDienThoai.getText().toString();

                                                UserRequest userRequest = new UserRequest(hoten, username, ngaySinh, male, sdt, public_id, urll);
                                                updateInfo(userRequest);
                                                setprbar();
                                            }
                                        }

                                        @Override
                                        public void onFailure(Call<ReponseUrl> call, Throwable t) {
                                            Toast.makeText(UpdateInformationActivity.this, "Upload image is wrong", Toast.LENGTH_SHORT).show();
                                            onBackPressed();
                                        }
                                    });
                                }
                            }

                            @Override
                            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

                            }
                        });

                    } else {
                        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                                "Bearer " + StoreUtil.get(UpdateInformationActivity.this, "Authorization"));
                        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
                            @Override
                            public void onResponse(Call<ResponseInformationUser> call, retrofit2.Response<ResponseInformationUser> response) {
                                if (response.isSuccessful()) {
                                    InformationUser informationUser = response.body().getData().get(0);
                                    String hoten = edtHoTen.getText().toString();
                                    String username = edtUserName.getText().toString();
                                    String ngaySinh = edtNgaySinh.getText().toString();
                                    String sdt = edtDienThoai.getText().toString();
                                    String url = informationUser.getUrl();
                                    String public_id = informationUser.getPublic_id();

                                    UserRequest userRequest = new UserRequest(hoten, username, ngaySinh, male, sdt, public_id, url);
                                    updateInfo(userRequest);
                                    setprbar();
                                }

                            }

                            @Override
                            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {
                                Toast.makeText(UpdateInformationActivity.this, "Upload image is wrong", Toast.LENGTH_SHORT).show();
                                onBackPressed();
                            }
                        });

                    }
                }
                // show progressBar

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
        imgInfo = findViewById(R.id.imgUserInfor);
        btnUpdate = findViewById(R.id.buttonUpdate);
        edtHoTen = findViewById(R.id.edt_ho_ten);
        edtUserName = findViewById(R.id.edt_username);
        edtNgaySinh = findViewById(R.id.edt_ngay_sinh);
        edtDienThoai = findViewById(R.id.edt_phone_number);
        tvValidateSex = findViewById(R.id.tv_validateSex);
        tilFullName = findViewById(R.id.til_full_name);
        tilUserName = findViewById(R.id.til_username);
        tilDateofBirth = findViewById(R.id.til_date_of_birth);
        tilPhoneNumber = findViewById(R.id.til_phone_number);

        radioGroup = findViewById(R.id.radioGroup);
        rdbMale = findViewById(R.id.Male);
        rdbFemale = findViewById(R.id.Female);
        imgBack = findViewById(R.id.back);
        progressBar=  findViewById(R.id.spin_kit);
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
                }

                @Override
                public void onFailure(Call<ResponseDTO> call, Throwable t) {
                }
            });
    }

    //     get data user profile
    public void getData() {
        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer " + StoreUtil.get(UpdateInformationActivity.this, "Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, Response<ResponseInformationUser> response) {
                InformationUser informationUser = response.body().getData().get(0);
                edtHoTen.setText(informationUser.getHoten());
                edtUserName.setText(informationUser.getUsername());

                String string = informationUser.getNgaysinh();
                String[] parts = string.split("T");
                String part1 = parts[0];
                edtNgaySinh.setText(part1);


                edtDienThoai.setText(informationUser.getDienthoai());
                String im = informationUser.getUrl();
                if (im.isEmpty()) {
                    imgInfo.setImageResource(R.drawable.loadimage);
                }else{
                    Glide.with(getApplicationContext())
                            .load(im)
                            .into(imgInfo);
                }
                if (informationUser.getGioitinh() == 1) {
                    rdbMale.setChecked(true);
                } else {
                    rdbFemale.setChecked(true);
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

    public void deleteImage() {

        Call<ResponseInformationUser> loginResponeCall = ApiClient.getService().getProfile(
                "Bearer " + StoreUtil.get(UpdateInformationActivity.this, "Authorization"));
        loginResponeCall.enqueue(new Callback<ResponseInformationUser>() {
            @Override
            public void onResponse(Call<ResponseInformationUser> call, retrofit2.Response<ResponseInformationUser> response) {
                InformationUser informationUser = response.body().getData().get(0);
                String public_id = informationUser.getPublic_id();
                DeleteImage deleteImage = new DeleteImage(public_id);
                Call<ReponseDeleteImage> responseDTOCall = ApiClient.getService().deleteImage(
                        "Bearer " + StoreUtil.get(UpdateInformationActivity.this, Contants.accessToken)
                        , deleteImage);
                responseDTOCall.enqueue(new Callback<ReponseDeleteImage>() {
                    @Override
                    public void onResponse(Call<ReponseDeleteImage> call, Response<ReponseDeleteImage> response) {

                    }

                    @Override
                    public void onFailure(Call<ReponseDeleteImage> call, Throwable t) {
                        t.printStackTrace();
                    }
                });

            }


            @Override
            public void onFailure(Call<ResponseInformationUser> call, Throwable t) {

            }
        });


    }

    public void setprbar(){
        Sprite foldingCube = new FoldingCube();
        progressBar.setIndeterminateDrawable(foldingCube);
        progressBar.setVisibility(View.VISIBLE);

        CountDownTimer countDownTimer = new CountDownTimer(5000, 1000) {
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

    private boolean validateFullName() {
        String fullname = edtHoTen.getText().toString().trim();
        if (fullname.length() < 8){
            tilFullName.setError("Minimum 8 Character");
            return false;
        }else if (!fullname.matches(".*[A-Z].*")){
            tilFullName.setError("Must contain 1 upper-case Character");
            return false;
        }else if (!fullname.matches(".*[a-z].*")) {
            tilFullName.setError("Must contain 1 Lower-case Character");
            return false;
        }else if (fullname.matches(".*[0-9].*")) {
            tilFullName.setError("Not number");
            return false;
        }else if (fullname.matches(".*[@!#$%^&*()_+=<>?/|].*")) {
            tilFullName.setError("Not special character");
            return false;
        }
        else {
            tilFullName.setError(null);
            return true;
        }
    }
    private boolean validateUsername() {
        String userName = edtUserName.getText().toString().trim();
        if (userName.length() < 6){
            tilUserName.setError("Minimum 6 Character");
            return false;
        }else if (!userName.matches(".*[a-z].*")) {
            tilUserName.setError("Contain 1 a-z");
            return false;
        }
        else {
            tilUserName.setError(null);
            return true;
        }
    }
    private boolean validateDateofBirth() {
        String dateofbirth = edtNgaySinh.getText().toString().trim();
        if (dateofbirth.length() < 10){
            tilDateofBirth.setError("Minimum 10 Character");
            return false;
        }
        else {
            tilDateofBirth.setError(null);
            return true;
        }
    }
    private boolean validateSex() {
        if (!rdbMale.isChecked() && !rdbFemale.isChecked()){
            tvValidateSex.setError("");
            return false;
        }
        else {
            tvValidateSex.setError(null);
            return true;
        }
    }
    private boolean validatePhoneNumber() {
        String phonenumber = edtDienThoai.getText().toString().trim();
        if (phonenumber.length() < 10){
            tilPhoneNumber.setError("Minimum 10 Character");
            return false;
        }else if (phonenumber.matches(".*[-,._].*")) {
            tilPhoneNumber.setError("Not special character");
            return false;
        }else if (phonenumber.matches(".*[A-Z].*")) {
            tilPhoneNumber.setError("Not character");
            return false;
        }else if (phonenumber.matches(".*[a-z].*")) {
            tilPhoneNumber.setError("Not character");
            return false;
        }
        else {
            tilPhoneNumber.setError(null);
            return true;
        }
    }
}