package com.example.oderapp.model;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class ItemCart implements Serializable {
    private int id;
    private int id_nd;
    private int id_sp;
    private int don_gia;
    private int soluong;
    private String ghi_chu;
    private int tong_gia;
    private String createdAt;
    private String updatedAt;

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public ItemCart(int id, int id_nd, int id_sp, int don_gia, int soluong, String ghi_chu, int tong_gia) {
        this.id = id;
        this.id_nd = id_nd;
        this.id_sp = id_sp;
        this.don_gia = don_gia;
        this.soluong = soluong;
        this.ghi_chu = ghi_chu;
        this.tong_gia = tong_gia;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_nd() {
        return id_nd;
    }

    public void setId_nd(int id_nd) {
        this.id_nd = id_nd;
    }

    public int getId_sp() {
        return id_sp;
    }

    public void setId_sp(int id_sp) {
        this.id_sp = id_sp;
    }

    public int getDon_gia() {
        return don_gia;
    }

    public void setDon_gia(int don_gia) {
        this.don_gia = don_gia;
    }

    public int getSoluong() {
        return soluong;
    }

    public void setSoluong(int soluong) {
        this.soluong = soluong;
    }

    public int getTong_gia() {
        return tong_gia;
    }

    public void setTong_gia(int tong_gia) {
        this.tong_gia = tong_gia;
    }

    public String getGhi_chu() {
        return ghi_chu;
    }

    public void setGhi_chu(String ghi_chu) {
        this.ghi_chu = ghi_chu;
    }
}
