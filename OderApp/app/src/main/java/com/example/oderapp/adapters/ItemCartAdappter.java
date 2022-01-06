package com.example.oderapp.adapters;

import android.content.ClipData;
import android.content.Context;
import android.media.Image;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.chauthai.swipereveallayout.SwipeRevealLayout;
import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.eventbus.EvenbusAddress;
import com.example.oderapp.eventbus.EvenbusiSizeListCart;
import com.example.oderapp.model.Currency;
import com.example.oderapp.model.GetItemCart;
import com.example.oderapp.model.ItemCart;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.UserRegister;
import com.example.oderapp.model.request.QualityProduct;
import com.example.oderapp.model.response.ResponseBodyAddress;
import com.example.oderapp.model.response.ResponseBodyCart;
import com.example.oderapp.model.response.ResponseBodyProduct;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.squareup.picasso.Picasso;

import org.greenrobot.eventbus.EventBus;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ItemCartAdappter extends RecyclerView.Adapter<ItemCartAdappter.ItemViewHolder> {

    private Context mContext;
    List<ItemCart> mItemCartList;
    // filter

    public ItemCartAdappter(Context context, List<ItemCart> mItemCartList) {
        this.mContext = context;
        this.mItemCartList = mItemCartList;
    }

    @Override
    public ItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_cart, parent, false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ItemViewHolder holder, int position) {

        ItemCart currentItem = mItemCartList.get(position);

        int id = currentItem.getId();
        int id_nd = currentItem.getId_nd();
        int id_sp = currentItem.getId_sp();
        int dongia = currentItem.getDon_gia();
        int soluong = currentItem.getSoluong();
        int tonggia = currentItem.getTong_gia();
        String ghichu = currentItem.getGhi_chu();

        holder.tvDonGia.setText(Integer.toString(dongia));
        holder.tvSoLuong.setText(Integer.toString(soluong));
        holder.tvTongGia.setText(Integer.toString(tonggia));
        holder.tvNote.setText(ghichu);

        int sl = Integer.parseInt(holder.tvSoLuong.getText().toString());
        if (sl >= 10) {
            holder.btnCong.setVisibility(View.INVISIBLE);
            holder.btnTru.setVisibility(View.VISIBLE);
        } else if (sl <= 1) {
            holder.btnTru.setVisibility(View.INVISIBLE);
        } else if (sl >= 1) {
            holder.btnCong.setVisibility(View.VISIBLE);
            holder.btnTru.setVisibility(View.VISIBLE);
        }
        holder.btnCong.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int slmoi = Integer.parseInt(holder.tvSoLuong.getText().toString()) + 1;
                if (slmoi > 9) {
                    holder.btnCong.setVisibility(View.INVISIBLE);
                    holder.btnTru.setVisibility(View.VISIBLE);
                    holder.tvSoLuong.setText(String.valueOf(slmoi));
                } else {
                    holder.btnCong.setVisibility(View.VISIBLE);
                    holder.btnTru.setVisibility(View.VISIBLE);
                    holder.tvSoLuong.setText(String.valueOf(slmoi));
                }

                QualityProduct qualityProduct = new QualityProduct(slmoi);
                HashMap<String, String> hashMap = new HashMap<>();
                hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));

                Call<ResponseBodyCart> responseDTOCall = ApiClient.getProductService().updateQualityProduct(id,qualityProduct,hashMap);
                responseDTOCall.enqueue(new Callback<ResponseBodyCart>() {
                    @Override
                    public void onResponse(Call<ResponseBodyCart> call, Response<ResponseBodyCart> response) {

                    }

                    @Override
                    public void onFailure(Call<ResponseBodyCart> call, Throwable t) {
                        t.printStackTrace();
                    }
                });
            }
        });

        holder.btnTru.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int slmoi = Integer.parseInt(holder.tvSoLuong.getText().toString()) - 1;
                if (slmoi < 2) {
                    holder.btnCong.setVisibility(View.VISIBLE);
                    holder.btnTru.setVisibility(View.INVISIBLE);
                    holder.tvSoLuong.setText(String.valueOf(slmoi));
                } else {
                    holder.btnCong.setVisibility(View.VISIBLE);
                    holder.btnTru.setVisibility(View.VISIBLE);
                    holder.tvSoLuong.setText(String.valueOf(slmoi));
                }

                QualityProduct qualityProduct = new QualityProduct(slmoi);
                HashMap<String, String> hashMap = new HashMap<>();
                hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));

                Call<ResponseBodyCart> responseDTOCall = ApiClient.getProductService().updateQualityProduct(id,qualityProduct,hashMap);
                responseDTOCall.enqueue(new Callback<ResponseBodyCart>() {
                    @Override
                    public void onResponse(Call<ResponseBodyCart> call, Response<ResponseBodyCart> response) {

                    }

                    @Override
                    public void onFailure(Call<ResponseBodyCart> call, Throwable t) {
                        t.printStackTrace();
                    }
                });


            }
        });

        holder.lnDelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mItemCartList.remove(holder.getAdapterPosition());
                notifyItemRemoved(holder.getAdapterPosition());
                Call<ResponseBodyCart> responseBodyCartCall = ApiClient.getProductService().deleteItemCart(id,
                        "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));
                responseBodyCartCall.enqueue(new Callback<ResponseBodyCart>() {
                    @Override
                    public void onResponse(Call<ResponseBodyCart> call, Response<ResponseBodyCart> response) {
                        Toast.makeText(v.getContext(), "Added in cart", Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onFailure(Call<ResponseBodyCart> call, Throwable t) {

                    }
                });

            }
        });

        //---------------------------------------------
        Call<ResponseBodyProduct> responseBodyProductCall = ApiClient.getProductService().getDescription(id_sp,
                "Bearer " + StoreUtil.get(mContext.getApplicationContext(), Contants.accessToken));
        responseBodyProductCall.enqueue(new Callback<ResponseBodyProduct>() {
            @Override
            public void onResponse(Call<ResponseBodyProduct> call, Response<ResponseBodyProduct> response) {
                ItemFood itemFood = response.body().getData().get(0);
                String anh = itemFood.getUrl();
//                holder.tv_nameProduct.setText(itemFood.getTensp());
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

//getsize();

    }


    @Override
    public int getItemCount() {
        if (mItemCartList != null){
            return mItemCartList.size();
        }
        return 0;
    }
//    public void getsize(){
//        EvenbusiSizeListCart event = new EvenbusiSizeListCart();
//        event.setSize(getItemCount());
//        EventBus.getDefault().post(event);
//
//        Log.e(String.valueOf(getItemCount()),"nam");
//    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {
        private ImageView imgProduct;
        private TextView tvDonGia;
        private TextView tvTongGia;
        private Button btnCong;
        private Button btnTru;
        private TextView tvSoLuong;
        private TextView tv_nameProduct;
        private TextView tvNote;

        private SwipeRevealLayout swipeRevealLayout;
        private LinearLayout lnDelete;

        public ItemViewHolder(View itemView) {
            super(itemView);
            imgProduct = itemView.findViewById(R.id.img_product);
            tvDonGia = itemView.findViewById(R.id.tv_donGia);
            tvTongGia = itemView.findViewById(R.id.tv_tongGia);
            btnTru = itemView.findViewById(R.id.btn_tru);
            btnCong = itemView.findViewById(R.id.btn_cong);
            tvSoLuong = itemView.findViewById(R.id.tv_soluong);
            tv_nameProduct = itemView.findViewById(R.id.tv_nameProduct);
            tvNote = itemView.findViewById(R.id.tv_note);

            lnDelete = itemView.findViewById(R.id.ln_delete);
            swipeRevealLayout = itemView.findViewById(R.id.swipereveallayout);
        }
    }




}