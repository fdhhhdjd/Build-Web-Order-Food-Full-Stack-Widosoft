package com.example.oderapp.adapters;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.HotThisMonthDetail;
import com.example.oderapp.model.Hot;

import java.util.List;

public class HomeMenuAdapter extends RecyclerView.Adapter<HomeMenuAdapter.ItemViewHolder>{

    private Context mContext;
    private List<Hot> mItemPizzaList;


    public HomeMenuAdapter(Context context, List<Hot> item1) {
        mContext = context;
        mItemPizzaList = item1;
    }

    @Override
    public ItemViewHolder onCreateViewHolder( ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_hot_this_month,parent,false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder( ItemViewHolder holder, int position) {

        Hot hotThisMonth = mItemPizzaList.get(position);
        if(hotThisMonth == null){
            return;
        }
        holder.itemImage.setImageResource(hotThisMonth.getImage());
        holder.itemName.setText(hotThisMonth.getName());
        holder.itemTime.setText(hotThisMonth.getTime());

        holder.layoutHotThisMonth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onClickgotoDetail(hotThisMonth);
            } 
        });
    }

      private void onClickgotoDetail(Hot hotThisMonth) {
        Intent intent = new Intent(mContext, HotThisMonthDetail.class);
        Bundle bundle = new Bundle();
        bundle.putSerializable("object",hotThisMonth);
        intent.putExtras(bundle);
        mContext.startActivity(intent);

    }

    @Override
    public int getItemCount() {

            return mItemPizzaList.size();
    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {
        public ImageView itemImage;
        public TextView itemTime;
        public TextView itemName;

        LinearLayout layoutHotThisMonth;
        public ItemViewHolder( View itemView) {
            super(itemView);
            layoutHotThisMonth = itemView.findViewById(R.id.layout_hot_this_month);

            itemImage = itemView.findViewById(R.id.hot_image);
            itemTime = itemView.findViewById(R.id.tv_hot_time);
            itemName = itemView.findViewById(R.id.tv_hot_name);
        }
    }

}
