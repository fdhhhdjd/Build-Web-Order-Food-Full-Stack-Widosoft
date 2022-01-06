package com.example.oderapp.model.request;

import java.io.Serializable;

public class VoucherRequest implements Serializable {
    private String id_voucher;

    public VoucherRequest(String id_voucher) {
        this.id_voucher = id_voucher;
    }

    public String getId_voucher() {
        return id_voucher;
    }

    public void setId_voucher(String id_voucher) {
        this.id_voucher = id_voucher;
    }
}
