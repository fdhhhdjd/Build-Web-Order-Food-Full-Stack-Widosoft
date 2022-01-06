package com.example.oderapp.model;

import java.io.Serializable;

public class Note implements Serializable {
    private String ghi_chu;

    public Note(String ghi_chu) {
        this.ghi_chu = ghi_chu;
    }

    public String getGhi_chu() {
        return ghi_chu;
    }

    public void setGhi_chu(String ghi_chu) {
        this.ghi_chu = ghi_chu;
    }
}
