package com.example.oderapp.model.response;

import com.example.oderapp.model.ItemBill;
import com.example.oderapp.model.ItemDetailBill;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseBodyDetailBill {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<ItemDetailBill> data = null;

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

    public List<ItemDetailBill> getData() {
        return data;
    }

    public void setData(List<ItemDetailBill> data) {
        this.data = data;
    }

}
