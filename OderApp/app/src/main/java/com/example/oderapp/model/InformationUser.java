package com.example.oderapp.model;

import java.io.Serializable;

public class InformationUser implements Serializable {
    private int id;
    private String hoten;
    private String username;
    private String ngaysinh;
    private int gioitinh;
    private String dienthoai;
    private String email;
    private String url;

    public InformationUser(int id, String hoten, String username, String ngaysinh, int gioitinh, String dienthoai, String email, String url) {
        this.id = id;
        this.hoten = hoten;
        this.username = username;
        this.ngaysinh = ngaysinh;
        this.gioitinh = gioitinh;
        this.dienthoai = dienthoai;
        this.email = email;
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHoten() {
        return hoten;
    }

    public void setHoten(String hoten) {
        this.hoten = hoten;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNgaysinh() {
        return ngaysinh;
    }

    public void setNgaysinh(String ngaysinh) {
        this.ngaysinh = ngaysinh;
    }

    public int getGioitinh() {
        return gioitinh;
    }

    public void setGioitinh(int gioitinh) {
        this.gioitinh = gioitinh;
    }

    public String getDienthoai() {
        return dienthoai;
    }

    public void setDienthoai(String dienthoai) {
        this.dienthoai = dienthoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}