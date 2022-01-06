package com.example.oderapp.model;

import com.example.oderapp.model.response.ResponseBodyCart;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseBodyDTO {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<ResponseBodyCart> data = null;

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

    public List<ResponseBodyCart> getData() {
        return data;
    }

    public void setData(List<ResponseBodyCart> data) {
        this.data = data;
    }
}
