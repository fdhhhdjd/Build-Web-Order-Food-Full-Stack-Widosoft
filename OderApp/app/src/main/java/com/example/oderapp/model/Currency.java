package com.example.oderapp.model;

import java.io.Serializable;
import java.util.ArrayList;

public class Currency implements Serializable {
    private int status;
    private String message;
//    private GetItemCart data;

    public Currency(int status, String message) {
        this.status = status;
        this.message = message;
//        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

//    public GetItemCart getData() {
//        return data;
//    }
//
//    public void setData(GetItemCart data) {
//        this.data = data;
//    }
}
