package com.example.oderapp.model.response;

import com.example.oderapp.model.InformationUser;
import com.example.oderapp.model.UserRegister;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseInformationUser {
    @SerializedName("status")
    @Expose
    private Integer status;
    @SerializedName("message")
    @Expose
    private String message;
    @SerializedName("data")
    @Expose
    private List<InformationUser> data = null;

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

    public List<InformationUser> getData() {
        return data;
    }

    public void setData(List<InformationUser> data) {
        this.data = data;
    }
}
