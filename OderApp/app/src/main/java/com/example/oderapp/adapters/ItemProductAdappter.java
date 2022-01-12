package com.example.oderapp.adapters;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.DetailActivity;
import com.example.oderapp.model.Category;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.Note;
import com.example.oderapp.model.ResponseBodyDTO;
import com.example.oderapp.model.response.ResponseBodyCategory;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ItemProductAdappter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private Context mContext;
    List<ItemFood> mItemFoodList;
    // filter

    public ItemProductAdappter(Context context, List<ItemFood> mItemFoodList) {
        this.mContext = context;
        this.mItemFoodList = mItemFoodList;
    }



    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            View view = LayoutInflater.from(parent.getContext())
                    .inflate(R.layout.item, parent, false);
            return new ItemViewHolder(view);

    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
            ItemFood currentItem = mItemFoodList.get(position);
            ItemViewHolder itemViewHolder = (ItemViewHolder) holder;

            String imageUrl = currentItem.getUrl();
            String tenSp = currentItem.getTensp();
            int tien = currentItem.getGia();
            Picasso.with(mContext)
                    .load(imageUrl).error(R.drawable.pizza_cheese).fit().centerInside().into(((ItemViewHolder) holder).itemImage);
            ((ItemViewHolder) holder).itemname.setText(tenSp);
            ((ItemViewHolder) holder).itemprice.setText(Integer.toString(tien));

//        holder.tvdetail.setText(itemScfi.getDetail());

            ((ItemViewHolder) holder).layoutItem.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
//                onClickgotoDetail(currentItem);

                    Intent i = new Intent(mContext, DetailActivity.class);
                    Bundle bundle = new Bundle();
                    bundle.putSerializable("object", currentItem);
                    i.putExtras(bundle);
                    mContext.startActivity(i);
                }
            });

            ((ItemViewHolder) holder).btnAddProduct.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Sprite foldingCube = new FoldingCube();
                    ((ItemViewHolder) holder).progressBar.setIndeterminateDrawable(foldingCube);
                    ((ItemViewHolder) holder).progressBar.setVisibility(View.VISIBLE);

                    CountDownTimer countDownTimer = new CountDownTimer(3000, 1000) {
                        @Override
                        public void onTick(long millisUntilFinished) {
                            int current = ((ItemViewHolder) holder).progressBar.getProgress();
                            if (current >= ((ItemViewHolder) holder).progressBar.getMax()) {
                                current = 0;
                            }
                            ((ItemViewHolder) holder).progressBar.setProgress(current + 5);
                        }

                        @Override
                        public void onFinish() {
                            ((ItemViewHolder) holder).progressBar.setVisibility(View.INVISIBLE);
                        }
                    };
                    countDownTimer.start();


                    String note = "";
                    Note nt = new Note(note);
                    Call<ResponseBodyDTO> loginResponeCall = ApiClient.getProductService().insertCart(currentItem.getId(),
                            "Bearer " + StoreUtil.get(mContext, Contants.accessToken), nt);
                    loginResponeCall.enqueue(new Callback<ResponseBodyDTO>() {
                        @Override
                        public void onResponse(Call<ResponseBodyDTO> call, Response<ResponseBodyDTO> response) {

                        }

                        @Override
                        public void onFailure(Call<ResponseBodyDTO> call, Throwable t) {

                        }
                    });

                }
            });

    }

    @Override
    public int getItemCount() {
        if (mItemFoodList != null) {
            return mItemFoodList.size();
        }
        return 0;
    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {
        public ImageView itemImage;
        public TextView itemprice;
        public TextView itemname;
        public TextView itemCategory;
        private Button btnAddProduct;
        private ProgressBar progressBar;

        ConstraintLayout layoutItem;

        public ItemViewHolder(View itemView) {
            super(itemView);
            layoutItem = itemView.findViewById(R.id.layout_item);
            itemImage = itemView.findViewById(R.id.itemImage);
            itemprice = itemView.findViewById(R.id.tv_price);
            itemname = itemView.findViewById(R.id.tv_name);
            itemCategory = itemView.findViewById(R.id.tv_category);
            btnAddProduct = itemView.findViewById(R.id.btn_add_product);
            progressBar = (ProgressBar) itemView.findViewById(R.id.spin_kit);
        }
    }

    public void filterList(ArrayList<ItemFood> filteredList) {
        mItemFoodList = filteredList;
        notifyDataSetChanged();
    }

}
