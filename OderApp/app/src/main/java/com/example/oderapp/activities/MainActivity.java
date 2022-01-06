package com.example.oderapp.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.TextView;
import android.widget.Toast;

import com.example.oderapp.R;
import com.example.oderapp.adapters.ItemCartAdappter;
import com.example.oderapp.eventbus.EvenbusAddress;
import com.example.oderapp.eventbus.EvenbusiSizeListCart;
import com.example.oderapp.fragment.CartFragment;
import com.example.oderapp.fragment.HomeFragment;
import com.example.oderapp.fragment.InfoFragment;
import com.example.oderapp.fragment.MenuFragment;
import com.example.oderapp.fragment.BillAndRatingFragment;
import com.example.oderapp.model.ItemCart;
import com.example.oderapp.model.response.RefreshTokenRespone;
import com.example.oderapp.utils.Contants;
import com.example.oderapp.utils.StoreUtil;
import com.ismaeldivita.chipnavigation.ChipNavigationBar;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity{
    private ChipNavigationBar chipNavigationBar;
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
//        EventBus.getDefault().register(this);




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
    }

    @Subscribe
    public void onEvent(EvenbusiSizeListCart event){
//        if (event.getSize() < 2){
////            chipNavigationBar.showBadge(R.id.cart,event.getSize());
//            chipNavigationBar.showBadge(View.INVISIBLE);
//        }else{
//            chipNavigationBar.showBadge(R.id.cart,event.getSize());
//
//        }

    }

}

