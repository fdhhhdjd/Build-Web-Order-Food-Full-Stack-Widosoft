package com.example.oderapp.model.request;

import java.io.Serializable;

public class ForgotPasswordRequest implements Serializable {
    private String email;

    public ForgotPasswordRequest(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
