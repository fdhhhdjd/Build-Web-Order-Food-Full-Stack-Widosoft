package com.example.oderapp.adapters;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentStatePagerAdapter;

import com.example.oderapp.fragment.BillAndRating.BillFragment;
import com.example.oderapp.fragment.BillAndRating.RatingFragment;

public class ViewPagerBillAndRatingAdapter extends FragmentStatePagerAdapter {
    public ViewPagerBillAndRatingAdapter(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position){
            case 0:
                return new BillFragment();
            case 1:
                return new RatingFragment();
            default:
                return new BillFragment();
        }

    }

    @Override
    public int getCount() {
        return 2;
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        String title = "";
        switch (position){
            case 0:
                title = "Bill";
                break;
            case 1:
                title = "History Rating";
                break;
        }
        return title;
    }
}
