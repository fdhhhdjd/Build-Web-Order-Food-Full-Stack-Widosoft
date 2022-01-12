package com.example.oderapp.model;

import java.io.Serializable;

public class Category implements Serializable {
    private int id;
    private String tendm;

    public Category(int id, String tendm) {
        this.id = id;
        this.tendm = tendm;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTendm() {
        return tendm;
    }

    public void setTendm(String tendm) {
        this.tendm = tendm;
    }
}
