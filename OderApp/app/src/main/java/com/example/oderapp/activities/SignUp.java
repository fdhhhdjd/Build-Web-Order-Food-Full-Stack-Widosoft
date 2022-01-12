package com.example.oderapp.activities;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.Patterns;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.oderapp.R;
import com.example.oderapp.api.ApiService;
import com.example.oderapp.model.UserRegister;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.textfield.TextInputLayout;

import java.util.Calendar;
import java.util.List;
import java.util.regex.Pattern;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class SignUp extends AppCompatActivity {
    private MaterialButton btnSignup;

    TextInputLayout tilFullName;
    TextInputLayout tilUserName;
    TextInputLayout tilDateofBirth;
    TextInputLayout tilPhoneNumber;
    TextInputLayout tilEmail;
    TextInputLayout tilPassword;
    TextInputLayout tilConfirmPassword;

    private EditText edtHoTen;
    private EditText edtUserName;
    private EditText edtNgaySinh;
    private TextView tvValidateSex;
    private EditText edtDienThoai;
    private EditText edtEmail;
    private EditText edtPassword;
    private EditText edtConfrimPassword;
    private ImageView imgBack;

    private RadioGroup radioGroup;
    private RadioButton rdbMale;
    private RadioButton rdbFemale;
    int sex = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
        initUi();

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


        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                switch (checkedId) {
                    case R.id.Male:
                        sex = 1;
                        break;
                    case R.id.Female:
                        sex = 0;
                        break;
                }
            }
        });

        btnSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                    registerUser();
            }
        });

        imgBack.setOnClickListener(new View.OnClickListener() {
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

    public void initUi() {
        btnSignup = findViewById(R.id.buttonSignUp);
        edtHoTen = findViewById(R.id.edt_ho_ten);
        edtUserName = findViewById(R.id.edt_username);
        edtNgaySinh = findViewById(R.id.edt_ngay_sinh);
        tvValidateSex = findViewById(R.id.tv_validateSex);
        edtDienThoai = findViewById(R.id.edt_phone_number);
        edtEmail = findViewById(R.id.edt_email);
        edtPassword = findViewById(R.id.edt_password);
        edtConfrimPassword = findViewById(R.id.edt_confirm_password);
        imgBack = findViewById(R.id.back);
        radioGroup = findViewById(R.id.radioGroup);
        rdbMale = findViewById(R.id.Male);
        rdbFemale = findViewById(R.id.Female);

        tilFullName = findViewById(R.id.til_full_name);
        tilUserName = findViewById(R.id.til_username);
        tilDateofBirth = findViewById(R.id.til_date_of_birth);
        tilPhoneNumber = findViewById(R.id.til_phone_number);
        tilEmail = findViewById(R.id.til_email);
        tilPassword = findViewById(R.id.til_pass);
        tilConfirmPassword = findViewById(R.id.til_confirm_pass);
    }

    private void registerUser() {
        String hoTen = edtHoTen.getText().toString().trim();
        String userName = edtUserName.getText().toString().trim();
        String ngaySinh = edtNgaySinh.getText().toString().trim();



        String dienThoai = edtDienThoai.getText().toString().trim();
        String email = edtEmail.getText().toString().trim();
        String password = edtPassword.getText().toString().trim();
        String confirmPassword = edtConfrimPassword.getText().toString();

        if (validateFullName() && validateUsername() && validateDateofBirth() && validateSex()
            && validatePhoneNumber() && validateEmail() && validatePassword() && validateConfirmPassword()) {
            UserRegister userRegister = new UserRegister(hoTen, userName, ngaySinh, sex, dienThoai, email, password);
            Call<UserRegister> loginResponeCall = ApiClient.getService().sendPost(userRegister);
            loginResponeCall.enqueue(new Callback<UserRegister>() {
                @Override
                public void onResponse(Call<UserRegister> call, Response<UserRegister> response) {
                    if (response.isSuccessful()) {
                        String message = "Sign up Successfully";
                        Toast.makeText(SignUp.this, message, Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(SignUp.this, Login.class));
                        finish();
                    } else {
                        String message = "Try again....";
                        Toast.makeText(SignUp.this, message, Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<UserRegister> call, Throwable t) {
                    Toast.makeText(SignUp.this, "Call Api Error", Toast.LENGTH_SHORT);
                }
            });
        }

    }
    private boolean validateFullName() {
        String fullname = edtHoTen.getText().toString().trim();
        if (fullname.length() < 8){
            tilFullName.setError("Minimum 8 Chac");
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
            tilDateofBirth.setError("Minimum 10 Chac");
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
            tilPhoneNumber.setError("Minimum 10 Chac");
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
    private boolean validateEmail() {
        String email = edtEmail.getText().toString().trim();
        if (email.isEmpty()){
            tilEmail.setError("Email can't empty");
            return false;
        }else if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            tilEmail.setError("Please enter a valid email address");
            return false;
        }
        else {
            tilEmail.setError(null);
            return true;
        }
    }
    private boolean validatePassword() {
        String pass = edtPassword.getText().toString().trim();
        if (pass.length() < 8){
            tilPassword.setError("Minimum 8 Chac");
            return false;
        }else if (!pass.matches(".*[A-Z].*")){
            tilPassword.setError("Must contain 1 upper-case Character");
            return false;
        }else if (!pass.matches(".*[a-z].*")) {
            tilPassword.setError("Must contain 1 Lower-case Character");
            return false;
        }else if (!pass.matches(".*[@!#$%^&*()_+=<>?/|].*")) {
            tilPassword.setError("Must contain 1 special character (@!#$%^&*()_+=<>?/|)");
            return false;
        }else if (!pass.matches(".*[0-9].*")) {
            tilPassword.setError("Must contain at least 1 number");
            return false;
        }
        else if (!pass.matches("\\S+$")) {
            tilPassword.setError("Must be no white space");
            return false;
        }
        else {
            tilPassword.setError(null);
            return true;
        }
    }
    private boolean validateConfirmPassword() {
        String password = edtPassword.getText().toString().trim();
        String confirmPass = edtConfrimPassword.getText().toString().trim();
        if (confirmPass.equals(password)){
            tilConfirmPassword.setError(null);
            return true;
        }
        else {
            tilConfirmPassword.setError("Password and Confirm are not match");
            return false;
        }
    }

}

