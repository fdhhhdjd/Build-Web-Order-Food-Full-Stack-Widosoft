package com.example.oderapp.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

import com.example.oderapp.R;


public class SliderAdapter extends PagerAdapter {
    Context context;
    LayoutInflater layoutInflater;

    public SliderAdapter(Context context) {
        this.context = context;
    }
    public int[] slide_image ={
            R.drawable.slided,
            R.drawable.slidea,
            R.drawable.slidec,
            R.drawable.shippera

    };
    public String[] slide_heading={
            "Welcome to the Pizza Store,",
            "How many kind of the pizza?",
            "Input materials",
            "fast shipping"
    };
    public String[] slide_descs={
            "the best food experience you'll ever have.",
            "We have at least 20 different pizzas.",
            "Mix special materials together, make are delicious pizzas.",
            "With an experienced delivery team, will bring hot food to customers."
    };

    @Override
    public int getCount() {
        return slide_heading.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object o) {
        return view == o ;
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
        layoutInflater = (LayoutInflater) context.getSystemService(context.LAYOUT_INFLATER_SERVICE);
        View view = layoutInflater.inflate(R.layout.slider,container,false);
        RelativeLayout slideImageView = view.findViewById(R.id.slide_img);
        TextView slideHeading = view.findViewById(R.id.slide_heading);
        TextView slideDescs = view.findViewById(R.id.slide_descs);

        slideImageView.setBackgroundResource(slide_image[position]);
        slideHeading.setText(slide_heading[position]);
        slideDescs.setText(slide_descs[position]);

        container.addView(view);
        return view;
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((RelativeLayout)object);
    }
}
