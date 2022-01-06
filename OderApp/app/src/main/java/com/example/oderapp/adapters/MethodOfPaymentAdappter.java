package com.example.oderapp.adapters;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.eventbus.EvenbusMethodPayment;
import com.example.oderapp.model.MethodOfPayment;
import com.example.oderapp.model.response.ResponseBodyMethodOfPayment;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.squareup.picasso.Picasso;

import org.greenrobot.eventbus.EventBus;

import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MethodOfPaymentAdappter extends RecyclerView.Adapter<MethodOfPaymentAdappter.ItemViewHolder> {

    List<MethodOfPayment> mMethodList;
    private Context mContext;
    // filter


    public MethodOfPaymentAdappter(List<MethodOfPayment> mMethodList, Context mContext) {
        this.mMethodList = mMethodList;
        this.mContext = mContext;
    }


    @Override
    public MethodOfPaymentAdappter.ItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_method_of_payment, parent, false);
        return new MethodOfPaymentAdappter.ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(MethodOfPaymentAdappter.ItemViewHolder holder, int position) {
        MethodOfPayment currentItem = mMethodList.get(position);
        int id = currentItem.getId();
        String nameMethod = currentItem.getTen_hinhthuc();
        String urlMethod = currentItem.getUrl();
        Picasso.with(mContext)
                .load(urlMethod).fit().centerInside().into(holder.urlMethod);
        holder.tvNameMethod.setText(nameMethod);
        holder.lnMethod.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                HashMap<String, String> hashMap = new HashMap<>();
                hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));

                Call<ResponseBodyMethodOfPayment> responseBodyMethodOfPaymentCall = ApiClient.getService().getMethodOfPayment(id,hashMap);
                responseBodyMethodOfPaymentCall.enqueue(new Callback<ResponseBodyMethodOfPayment>() {
                    @Override
                    public void onResponse(Call<ResponseBodyMethodOfPayment> call, Response<ResponseBodyMethodOfPayment> response) {
                        Toast.makeText(v.getContext(), "Added your method of payment", Toast.LENGTH_SHORT).show();
                        MethodOfPayment  methodOfPayment = response.body().getData().get(0);
                        int mt = methodOfPayment.getId();
                        String nameMT = methodOfPayment.getTen_hinhthuc();
                        EvenbusMethodPayment event = new EvenbusMethodPayment();
                        event.setId(Integer.parseInt(String.valueOf(mt)));
                        event.setName(String.valueOf(nameMT));
                        EventBus.getDefault().post(event);

                        ((Activity)mContext).finish();

                    }

                    @Override
                    public void onFailure(Call<ResponseBodyMethodOfPayment> call, Throwable t) {
                        t.printStackTrace();
                    }
                });
            }
        });
    }


    @Override
    public int getItemCount() {

        return mMethodList.size();
    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {
        private TextView tvNameMethod;
        private ImageView urlMethod;
        private LinearLayout lnMethod;

        public ItemViewHolder(View itemView) {
            super(itemView);
            tvNameMethod = itemView.findViewById(R.id.tv_method);
            urlMethod = itemView.findViewById(R.id.img_method);
            lnMethod = itemView.findViewById(R.id.ln_method);
        }
    }
}
