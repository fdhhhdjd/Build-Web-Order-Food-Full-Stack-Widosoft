package com.example.oderapp.model.request;

import java.io.Serializable;

public class DeleteImage implements Serializable {
    private String public_id;

    public DeleteImage(String public_id) {
        this.public_id = public_id;
    }

    public String getPublic_id() {
        return public_id;
    }

    public void setPublic_id(String public_id) {
        this.public_id = public_id;
    }
}
