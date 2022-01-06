package com.example.oderapp.model.request;

import java.io.Serializable;

public class ChangePasswordRequest implements Serializable {
    private String password;
    private String confirmPassword;

    public ChangePasswordRequest(String password, String confirmPassword) {
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
