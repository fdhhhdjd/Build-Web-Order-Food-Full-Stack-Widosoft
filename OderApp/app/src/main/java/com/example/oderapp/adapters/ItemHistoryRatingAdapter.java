package com.example.oderapp.adapters;

import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.CountDownTimer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import com.example.oderapp.R;
import com.example.oderapp.activities.ApiClient;
import com.example.oderapp.model.ItemBill;
import com.example.oderapp.model.Rating;
import com.example.oderapp.model.response.ResponseBodyBill;
import com.example.oderapp.model.response.ResponseRating;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.FoldingCube;

import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ItemHistoryRatingAdapter extends RecyclerView.Adapter<ItemHistoryRatingAdapter.ItemViewHolder> {

    private Context mContext;
    List<Rating> mRating;
    // filter

    public ItemHistoryRatingAdapter(Context context, List<Rating> mRating) {
        this.mContext = context;
        this.mRating = mRating;
    }

    @Override
    public ItemHistoryRatingAdapter.ItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_history_rating, parent, false);
        return new ItemHistoryRatingAdapter.ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ItemHistoryRatingAdapter.ItemViewHolder holder, int position) {

        Rating currentItem = mRating.get(position);

        int id = currentItem.getId();
        int id_hd = currentItem.getId_hd();
        int star = currentItem.getDiem_danhgia();
        String comment = currentItem.getBinhluan();

        holder.tvIdBill.setText(Integer.toString(id_hd));
        holder.tvStar.setText(Integer.toString(star));
        holder.tvComment.setText(comment);


        holder.imgEditRating.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                final Dialog dialog = new Dialog(v.getContext());
                dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                dialog.setContentView(R.layout.dialog_rating);

                Window window = dialog.getWindow();
                if (window == null) {
                    return;
                }

                window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                WindowManager.LayoutParams windowAtribute = window.getAttributes();
                window.setAttributes(windowAtribute);

                ProgressBar progressBar = dialog.findViewById(R.id.spin_kit);
                EditText edtComment = dialog.findViewById(R.id.edt_comment_dialog);
                Button btnCancel = dialog.findViewById(R.id.btn_cancel);
                Button btnSave = dialog.findViewById(R.id.btn_save_address);
                RatingBar ratingBar = dialog.findViewById(R.id.rating_bar);
                btnCancel.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
                dialog.show();

                edtComment.setText(comment);
                // rating bill
                btnSave.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        int myRating = (int) ratingBar.getRating();
                        String cmt = edtComment.getText().toString();
                        if (cmt.isEmpty()) {
                            Toast.makeText(v.getContext(), "Please write your feedback", Toast.LENGTH_SHORT).show();
                        } else {
                            Rating rating = new Rating(myRating, cmt);

                            HashMap<String, String> hashMap = new HashMap<>();
                            hashMap.put(Contants.accessToken, "Bearer " + StoreUtil.get(v.getContext(), Contants.accessToken));
                            hashMap.put(Contants.contentLength, "<calculated when request is sent>");
                            Call<ResponseRating> responseRatingCall = ApiClient.getService().updateRating(id, rating, hashMap);
                            responseRatingCall.enqueue(new Callback<ResponseRating>() {
                                @Override
                                public void onResponse(Call<ResponseRating> call, Response<ResponseRating> response) {

                                    if (response.isSuccessful()) {
                                        Sprite foldingCube = new FoldingCube();
                                        progressBar.setIndeterminateDrawable(foldingCube);
                                        progressBar.setVisibility(View.VISIBLE);

                                        CountDownTimer countDownTimer = new CountDownTimer(3000, 1000) {
                                            @Override
                                            public void onTick(long millisUntilFinished) {
                                                int current = progressBar.getProgress();
                                                if (current >= progressBar.getMax()) {
                                                    current = 0;
                                                }
                                                progressBar.setProgress(current + 10);
                                            }

                                            @Override
                                            public void onFinish() {
                                                progressBar.setVisibility(View.INVISIBLE);
                                                dialog.dismiss();
                                            }
                                        };
                                        countDownTimer.start();
                                    }
                                }

                                @Override
                                public void onFailure(Call<ResponseRating> call, Throwable t) {

                                }
                            });

                        }
                    }
                });

            }
        });


    }


    @Override
    public int getItemCount() {

        return mRating.size();
    }


    public class ItemViewHolder extends RecyclerView.ViewHolder {

        private TextView tvIdBill;
        private TextView tvStar;
        private TextView tvComment;
        private ImageView imgEditRating;

        public ItemViewHolder(View itemView) {
            super(itemView);
            tvIdBill = itemView.findViewById(R.id.tv_id_bill);
            tvStar = itemView.findViewById(R.id.tv_star);
            tvComment = itemView.findViewById(R.id.tv_comment);

            imgEditRating = itemView.findViewById(R.id.img_edit_history_rating);
        }
    }


}

