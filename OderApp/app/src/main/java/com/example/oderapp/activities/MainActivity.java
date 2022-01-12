package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.View;

import com.example.oderapp.R;
import com.example.oderapp.adapters.ItemCartAdappter;
import com.example.oderapp.fragment.CartFragment;
import com.example.oderapp.fragment.HomeFragment;
import com.example.oderapp.fragment.InfoFragment;
import com.example.oderapp.fragment.MenuFragment;
import com.example.oderapp.fragment.BillAndRatingFragment;
import com.ismaeldivita.chipnavigation.ChipNavigationBar;

import org.greenrobot.eventbus.Subscribe;

public class MainActivity extends AppCompatActivity  {
    private ChipNavigationBar chipNavigationBar;
    ItemCartAdappter adappter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        chipNavigationBar = findViewById(R.id.bottom_nav_bar);

        chipNavigationBar.setItemSelected(R.id.home,
                true);
        getSupportFragmentManager().beginTransaction()
                .replace(R.id.fragment_container,
                        new HomeFragment()).commit();
        bottomMenu();




    }


    private void bottomMenu() {
        chipNavigationBar.setOnItemSelectedListener
                (new ChipNavigationBar.OnItemSelectedListener() {
                    @Override
                    public void onItemSelected(int i) {
                        Fragment fragment = null;
                        switch (i) {
                            case R.id.home:
                                fragment = new HomeFragment();
                                break;
                            case R.id.menu:
                                fragment = new MenuFragment();
                                break;
                            case R.id.cart:
                                fragment = new CartFragment();
                                break;
                            case R.id.bill:
                                fragment = new BillAndRatingFragment();
                                break;
                            case R.id.info:
                                fragment = new InfoFragment();
                                break;
                        }
                        getSupportFragmentManager().beginTransaction()
                                .replace(R.id.fragment_container,
                                        fragment).commit();
                    }
                });
//        chipNavigationBar.showBadge(R.id.cart,listSize);

    }

}

