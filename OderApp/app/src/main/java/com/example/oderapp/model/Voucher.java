package com.example.oderapp.model;

import java.io.Serializable;

public class Voucher implements Serializable {
    private String id;
    private String ten_phieu;
    private int giatri;
    private String mota;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTen_phieu() {
        return ten_phieu;
    }

    public void setTen_phieu(String ten_phieu) {
        this.ten_phieu = ten_phieu;
    }

    public int getGiatri() {
        return giatri;
    }

    public void setGiatri(int giatri) {
        this.giatri = giatri;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }
}
