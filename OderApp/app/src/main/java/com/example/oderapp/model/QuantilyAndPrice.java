package com.example.oderapp.model;

import java.io.Serializable;

public class QuantilyAndPrice implements Serializable {
    private int tongtien_gh;
    private int tong_sl;

    public int getTongtien_gh() {
        return tongtien_gh;
    }

    public void setTongtien_gh(int tongtien_gh) {
        this.tongtien_gh = tongtien_gh;
    }

    public int getTong_sl() {
        return tong_sl;
    }

    public void setTong_sl(int tong_sl) {
        this.tong_sl = tong_sl;
    }
}
