package com.example.oderapp.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.model.ItemDetailBill;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.response.ResponseBodyProduct;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.squareup.picasso.Picasso;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ItemDetailBillAdappter extends RecyclerView.Adapter<ItemDetailBillAdappter.ItemViewHolder> {

    private Context mContext;
    List<ItemDetailBill> mItemDetailBillList;
    // filter

    public ItemDetailBillAdappter(Context context, List<ItemDetailBill> mItemDetailBillList) {
        this.mContext = context;
        this.mItemDetailBillList = mItemDetailBillList;
    }

    @Override
    public ItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_detail_bill, parent, false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ItemViewHolder holder, int position) {

        ItemDetailBill currentItem = mItemDetailBillList.get(position);
        int id_sp = currentItem.getId_sp();
        int dongia = currentItem.getDon_gia();
        int soluong = currentItem.getSoluong();
        int tonggia = currentItem.getTong_gia();
        String note = currentItem.getGhi_chu();


        holder.tvDonGia.setText(Integer.toString(dongia));
        holder.tvSoLuong.setText(Integer.toString(soluong));
        holder.tvTongGia.setText(Integer.toString(tonggia));
        holder.tvNote.setText(note);



        //---------------------------------------------
        Call<ResponseBodyProduct> responseBodyProductCall = ApiClient.getProductService().getDescription(id_sp,
                "Bearer " + StoreUtil.get(mContext.getApplicationContext(), Contants.accessToken));
        responseBodyProductCall.enqueue(new Callback<ResponseBodyProduct>() {
            @Override
            public void onResponse(Call<ResponseBodyProduct> call, Response<ResponseBodyProduct> response) {
                ItemFood itemFood = response.body().getData().get(0);
                String anh = itemFood.getUrl();
                holder.tv_nameProduct.setText(itemFood.getTensp());

                Picasso.with(mContext.getApplicationContext())
                        .load(anh).fit().centerInside().into(holder.imgProduct);
            }

            @Override
            public void onFailure(Call<ResponseBodyProduct> call, Throwable t) {
                t.printStackTrace();
            }
        });
        //-----------------------------------------


    }


    @Override
    public int getItemCount() {

        return mItemDetailBillList.size();
    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {
        private ImageView imgProduct;
        private TextView tvDonGia;
        private TextView tvTongGia;
        private TextView tvSoLuong;
        private TextView tv_nameProduct;
        private TextView tvNote;

        public ItemViewHolder(View itemView) {
            super(itemView);
            imgProduct = itemView.findViewById(R.id.img_product);
            tvDonGia = itemView.findViewById(R.id.tv_donGia);
            tvTongGia = itemView.findViewById(R.id.tv_tongGia);
            tvSoLuong = itemView.findViewById(R.id.tv_soluong);
            tv_nameProduct = itemView.findViewById(R.id.tv_nameProduct);
            tvNote = itemView.findViewById(R.id.tv_note);


        }
    }




}