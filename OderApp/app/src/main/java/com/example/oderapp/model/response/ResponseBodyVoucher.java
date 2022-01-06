package com.example.oderapp.model.response;

import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.Voucher;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseBodyVoucher {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<Voucher> data = null;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Voucher> getData() {
        return data;
    }

    public void setData(List<Voucher> data) {
        this.data = data;
    }

}
