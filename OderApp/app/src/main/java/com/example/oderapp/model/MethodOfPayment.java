package com.example.oderapp.model;

import java.io.Serializable;

public class MethodOfPayment implements Serializable {
    private int id;
    private String ten_hinhthuc;
    private String url;

    public MethodOfPayment(int id, String ten_hinhthuc, String url) {
        this.id = id;
        this.ten_hinhthuc = ten_hinhthuc;
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen_hinhthuc() {
        return ten_hinhthuc;
    }

    public void setTen_hinhthuc(String ten_hinhthuc) {
        this.ten_hinhthuc = ten_hinhthuc;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
