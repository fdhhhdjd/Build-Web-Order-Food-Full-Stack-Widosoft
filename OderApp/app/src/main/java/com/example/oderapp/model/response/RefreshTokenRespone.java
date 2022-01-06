package com.example.oderapp.model.response;

import java.io.Serializable;

public class RefreshTokenRespone implements Serializable {
    private int status;
    private String accessToken;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
