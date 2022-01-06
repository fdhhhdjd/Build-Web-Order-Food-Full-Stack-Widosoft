package com.example.oderapp.model.response;

import com.example.oderapp.model.Address;
import com.example.oderapp.model.MethodOfPayment;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.lang.reflect.Method;
import java.util.List;

public class ResponseBodyMethodOfPayment {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<MethodOfPayment> data = null;

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

    public List<MethodOfPayment> getData() {
        return data;
    }

    public void setData(List<MethodOfPayment> data) {
        this.data = data;
    }

}
