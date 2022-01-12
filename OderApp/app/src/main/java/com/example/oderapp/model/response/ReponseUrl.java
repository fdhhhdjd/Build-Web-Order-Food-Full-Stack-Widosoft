package com.example.oderapp.model.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class ReponseUrl implements Serializable{
    @SerializedName("public_id")
    @Expose
    private String publicId;

    @SerializedName("url")
    @Expose
    private String url;

    public String getPublicId() {
        return publicId;
    }

    public void setPublicId(String publicId) {
        this.publicId = publicId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
