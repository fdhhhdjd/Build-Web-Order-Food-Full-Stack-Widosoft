package com.example.oderapp.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentStatePagerAdapter;
import androidx.viewpager.widget.ViewPager;
import com.example.oderapp.R;
import com.example.oderapp.adapters.ViewPagerBillAndRatingAdapter;
import com.google.android.material.tabs.TabLayout;


public class BillAndRatingFragment extends Fragment {

    private View mview;
    private TabLayout tableLayout;
    private ViewPager viewPager;

    public BillAndRatingFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mview = inflater.inflate(R.layout.fragment_bill_and_rating, container, false);
        tableLayout = mview.findViewById(R.id.tabLayout_bill_and_rating);
        viewPager = mview.findViewById(R.id.view_pager_bill_and_rating);

        ViewPagerBillAndRatingAdapter viewPagerBillAndRatingAdapter = new ViewPagerBillAndRatingAdapter(getParentFragmentManager(), FragmentStatePagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT);
        viewPager.setAdapter(viewPagerBillAndRatingAdapter);

        tableLayout.setupWithViewPager(viewPager);
        return mview;

    }
}