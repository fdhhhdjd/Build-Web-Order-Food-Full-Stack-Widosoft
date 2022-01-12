package com.example.oderapp.model.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class ReponseDeleteImage implements Serializable{
    @SerializedName("msg")
    @Expose
    private String msg;


    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
