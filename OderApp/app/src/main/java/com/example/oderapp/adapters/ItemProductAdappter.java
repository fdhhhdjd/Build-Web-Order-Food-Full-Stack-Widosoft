package com.example.oderapp.adapters;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Filter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.activities.DetailActivity;
import com.example.oderapp.model.ItemFood;
import com.example.oderapp.model.Note;
import com.example.oderapp.model.ResponseBodyDTO;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.DoubleBounce;
import com.github.ybq.android.spinkit.style.FoldingCube;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ItemProductAdappter extends RecyclerView.Adapter<ItemProductAdappter.ItemViewHolder>{

    private Context mContext;
     ArrayList<ItemFood> mItemFoodList;
    // filter



    public ItemProductAdappter(Context context, ArrayList<ItemFood> mItemFoodList) {
        this.mContext = context;
        this.mItemFoodList = mItemFoodList;
    }

    @Override
    public ItemViewHolder onCreateViewHolder( ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item,parent,false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder( ItemViewHolder holder, int position) {

        ItemFood currentItem = mItemFoodList.get(position);

        String imageUrl = currentItem.getUrl();
        String tenSp = currentItem.getTensp();
        int tien = currentItem.getGia();
        Picasso.with(mContext)
                .load(imageUrl).error(R.drawable.pizza_cheese).fit().centerInside().into(holder.itemImage);
        holder.itemname.setText(tenSp);
        holder.itemprice.setText(Integer.toString(tien));

//        holder.tvdetail.setText(itemScfi.getDetail());

        holder.layoutItem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                onClickgotoDetail(currentItem);

                Intent i = new Intent(mContext,DetailActivity.class);
                Bundle bundle = new Bundle();
                bundle.putSerializable("object",currentItem);
                i.putExtras( bundle);
                mContext.startActivity(i);
            } 
        });

        holder.btnAddProduct.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Sprite foldingCube = new FoldingCube();
                holder.progressBar.setIndeterminateDrawable(foldingCube);
                holder.progressBar.setVisibility(View.VISIBLE);

                CountDownTimer countDownTimer = new CountDownTimer(3000,1000) {
                    @Override
                    public void onTick(long millisUntilFinished) {
                        int current = holder.progressBar.getProgress();
                        if (current >= holder.progressBar.getMax()){
                            current = 0;
                        }
                        holder.progressBar.setProgress(current + 10);
                    }
                    @Override
                    public void onFinish() {
                        holder.progressBar.setVisibility(View.INVISIBLE);
                    }
                };
                countDownTimer.start();



                String note = "";
                Note nt = new Note(note);
                Call<ResponseBodyDTO> loginResponeCall = ApiClient.getProductService().insertCart(currentItem.getId(),
                        "Bearer " + StoreUtil.get(mContext, Contants.accessToken),nt);
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

            return mItemFoodList.size();
    }


    public  class ItemViewHolder extends RecyclerView.ViewHolder {
        public ImageView itemImage;
        public TextView itemprice;
        public TextView itemname;
        private Button btnAddProduct;
        private ProgressBar progressBar;

        ConstraintLayout layoutItem;
        public ItemViewHolder( View itemView) {
            super(itemView);
            layoutItem = itemView.findViewById(R.id.layout_item);
            itemImage=itemView.findViewById(R.id.itemImage);
            itemprice=itemView.findViewById(R.id.tv_price);
            itemname=itemView.findViewById(R.id.tv_name);
            btnAddProduct = itemView.findViewById(R.id.btn_add_product);
             progressBar = (ProgressBar)itemView.findViewById(R.id.spin_kit);
        }
    }
    public void filterList(ArrayList<ItemFood> filteredList){
        mItemFoodList = filteredList;
        notifyDataSetChanged();
    }

}
