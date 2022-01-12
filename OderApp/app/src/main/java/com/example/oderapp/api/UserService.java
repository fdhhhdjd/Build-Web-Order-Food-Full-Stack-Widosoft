package com.example.oderapp.api;

import com.example.oderapp.activities.LoginRequest;
import com.example.oderapp.activities.LoginRespone;
import com.example.oderapp.model.Address;
import com.example.oderapp.model.ItemBill;
import com.example.oderapp.model.Rating;
import com.example.oderapp.model.UserRegister;
import com.example.oderapp.model.request.ChangePasswordRequest;
import com.example.oderapp.model.request.DeleteImage;
import com.example.oderapp.model.request.ForgotPasswordRequest;
import com.example.oderapp.model.request.UserRequest;
import com.example.oderapp.model.request.VoucherRequest;
import com.example.oderapp.model.response.RefreshTokenRespone;
import com.example.oderapp.model.response.ReponseDeleteImage;
import com.example.oderapp.model.response.ReponseUrl;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.model.response.ResponseBodyBill;
import com.example.oderapp.model.response.ResponseBodyCart;
import com.example.oderapp.model.response.ResponseBodyDetailBill;
import com.example.oderapp.model.response.ResponseBodyMethodOfPayment;
import com.example.oderapp.model.response.ResponseBodyRating;
import com.example.oderapp.model.response.ResponseBodyVoucher;
import com.example.oderapp.model.response.ResponseChangePasswordDTO;
import com.example.oderapp.model.response.ResponseDTO;
import com.example.oderapp.model.response.ResponseForgotPassword;
import com.example.oderapp.model.response.ResponseInformationUser;
import com.example.oderapp.model.response.ResponseRating;
import com.example.oderapp.utils.Contants;

import java.util.HashMap;
import java.util.Map;

import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.HeaderMap;
import retrofit2.http.Multipart;
import retrofit2.http.PATCH;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.Path;
import retrofit2.http.Query;
import retrofit2.http.QueryMap;

public interface UserService {
    // register
    @POST("customer/register")
    Call<UserRegister> sendPost(@Body UserRegister userRegister);

    @POST("/customer/login")
    Call<LoginRespone> loginUser(@HeaderMap HashMap<String, String> hashMap,@Body LoginRequest loginRequest);


    @GET("/customer/refreshToken")
    Call<RefreshTokenRespone> refreshToken(@Header("Cookie") String refreshToken);

    // update infomation user
    @PATCH("customer/updateProfile")
    Call<ResponseDTO> updateInfo(@HeaderMap HashMap<String, String> hashMap, @Body UserRequest userRequest);

    //forgot password
    @POST("customer/forgotPassword")
    Call<ResponseForgotPassword> forgotPassword (@HeaderMap HashMap<String, String> hashMap,@Body ForgotPasswordRequest forgotPassword);

    // change password
    @PATCH("customer/changePassword")
    Call<ResponseChangePasswordDTO> changePasswordUser(@HeaderMap HashMap<String, String> hashMap, @Body ChangePasswordRequest changePasswordRequest);

    @GET("/customer/profile")
    Call<ResponseInformationUser> getProfile(@Header("Authorization") String authorization);

    @DELETE("/customer/logout")
    Call<ResponseDTO> deleteUser(@Header("Cookie") String refreshToken);

    @POST("/address/add")
    Call<ResponseBodyAddress> insertAddress(@Header("Authorization") String authorization,@Body Address address);
    // get list address of user login
    @GET("/address")
    Call<ResponseBodyAddress> getListAddress(@HeaderMap HashMap<String, String> hashMap);

    @GET("/address/{id}")
    Call<ResponseBodyAddress> getAddress(@Path("id") int id,@HeaderMap HashMap<String, String> hashMap);

    @PATCH("/address/{id}")
    Call<ResponseDTO> updateAddress(@Path("id")int id,@Body Address address,@HeaderMap HashMap<String, String> hashMap);

    @DELETE("/address/{id}")
    Call<ResponseBodyAddress> deleteAddress(@Path("id") int id, @Header("Authorization") String authorization);

    @GET("/payment")
    Call<ResponseBodyMethodOfPayment> getListMethodOfPayment(@HeaderMap HashMap<String, String> hashMap);

    @GET("/payment/{id}")
    Call<ResponseBodyMethodOfPayment> getMethodOfPayment(@Path("id") int id,@HeaderMap HashMap<String, String> hashMap);

    @POST("/bill/create")
    Call<ResponseBodyBill> createBill(@HeaderMap HashMap<String, String> hashMap, @Body ItemBill itemBill);

    @GET("/bill/detail/{id}")
    Call<ResponseBodyDetailBill> getDetailBill (@Path("id") int id, @Header("Authorization") String authorization);

    @GET("/voucher/check/{id}")
    Call<ResponseBodyVoucher> getVoucher (@Path("id") String id,@HeaderMap HashMap<String, String> hashMap);

    @POST("/rating/add/{id}")
    Call<ResponseRating> ratingBill(@Path("id") int id, @Body Rating rating, @HeaderMap HashMap<String, String> hashMap);

    // get history rating with author
    @GET("/rating/history")
    Call<ResponseBodyRating> getHistoryRating(@Header("Authorization") String authorization);

    @PATCH("/rating/update/{id}")
    Call<ResponseRating> updateRating(@Path("id") int id, @Body Rating rating,@HeaderMap HashMap<String, String> hashMap);

    @Multipart
    @POST("/cloud/uploadUserImage/customer")
    Call<ReponseUrl> uploadImage(@Header("Authorization") String authorization,@Part MultipartBody.Part file);

    @POST("/cloud/destroy/customer")
    Call<ReponseDeleteImage> deleteImage(@Header("Authorization") String authorization, @Body DeleteImage deleteImage);
}

