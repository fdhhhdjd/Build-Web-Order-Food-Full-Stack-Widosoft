package com.example.oderapp.model;

import java.io.Serializable;

public class Hot implements Serializable {
    private int image;
    private String date;
    private String name;
    private String time;
    private String detail;

    public Hot(int image, String date,String name, String time, String detail) {
        this.image = image;
        this.name = name;
        this.date = date;
        this.time = time;
        this.detail = detail;
    }

    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
