package com.example.oderapp.model.response;

import com.example.oderapp.model.ItemCart;
import com.example.oderapp.model.ItemFood;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseBodyProduct {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<ItemFood> data = null;

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

    public List<ItemFood> getData() {
        return data;
    }

    public void setData(List<ItemFood> data) {
        this.data = data;
    }

}
