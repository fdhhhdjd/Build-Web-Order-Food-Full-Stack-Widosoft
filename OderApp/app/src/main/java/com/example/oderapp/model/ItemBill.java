package com.example.oderapp.model;

import java.io.Serializable;

public class ItemBill implements Serializable {
    private int id;
    private int id_nd;
    private int id_thanhtoan;
    private int id_diachi;
    private int tong_sl;
    private int tong_hd;
    private int tongtien_gh;
    private String id_voucher;
    private String ngaydathang;
    private String tinhtrangHD;


    public ItemBill(int id_thanhtoan, int id_diachi, String id_voucher) {
        this.id_thanhtoan = id_thanhtoan;
        this.id_diachi = id_diachi;
        this.id_voucher = id_voucher;
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

    public int getId_thanhtoan() {
        return id_thanhtoan;
    }

    public void setId_thanhtoan(int id_thanhtoan) {
        this.id_thanhtoan = id_thanhtoan;
    }

    public int getId_diachi() {
        return id_diachi;
    }

    public void setId_diachi(int id_diachi) {
        this.id_diachi = id_diachi;
    }

    public String getNgaydathang() {
        return ngaydathang;
    }

    public void setNgaydathang(String ngaydathang) {
        this.ngaydathang = ngaydathang;
    }

    public String getTinhtrangHD() {
        return tinhtrangHD;
    }

    public void setTinhtrangHD(String tinhtrangHD) {
        this.tinhtrangHD = tinhtrangHD;
    }

    public int getTong_sl() {
        return tong_sl;
    }

    public void setTong_sl(int tong_sl) {
        this.tong_sl = tong_sl;
    }

    public int getTong_hd() {
        return tong_hd;
    }

    public void setTong_hd(int tong_hd) {
        this.tong_hd = tong_hd;
    }

    public int getTongtien_gh() {
        return tongtien_gh;
    }

    public void setTongtien_gh(int tongtien_gh) {
        this.tongtien_gh = tongtien_gh;
    }

    public String getId_voucher() {
        return id_voucher;
    }

    public void setId_voucher(String id_voucher) {
        this.id_voucher = id_voucher;
    }
}
