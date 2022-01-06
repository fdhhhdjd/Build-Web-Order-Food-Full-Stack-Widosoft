package com.example.oderapp.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;


import com.example.oderapp.R;
import com.shrikanthravi.customnavigationdrawer2.data.MenuItem;
import com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer;

import java.util.ArrayList;
import java.util.List;

public class MenuFragment extends Fragment {
    private SNavigationDrawer sNavigationDrawer;
    int color1 = 0;
    Class fragmentClass;
    public static Fragment fragment;

    public MenuFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_menu, container, false);
        sNavigationDrawer = view.findViewById(R.id.navigationDrawer);
        //Creating a list of menu Items

        List<com.shrikanthravi.customnavigationdrawer2.data.MenuItem> menuItems = new ArrayList<>();

        //Use the MenuItem given by this library and not the default one.
        //First parameter is the title of the menu item and then the second parameter is the image which will be the background of the menu item.

        menuItems.add(new com.shrikanthravi.customnavigationdrawer2.data.MenuItem("Pizza", R.drawable.pizza_cheese));
        menuItems.add(new com.shrikanthravi.customnavigationdrawer2.data.MenuItem("Pasta", R.drawable.my_cay_hai_san));
        menuItems.add(new com.shrikanthravi.customnavigationdrawer2.data.MenuItem("Appertizer", R.drawable.kv_dui_ga_tam_bot_chien_gion));
        menuItems.add(new com.shrikanthravi.customnavigationdrawer2.data.MenuItem("Drink", R.drawable.drink_seven_up));
        menuItems.add(new com.shrikanthravi.customnavigationdrawer2.data.MenuItem("Salad", R.drawable.salad_da_ca_hoi_gion));


        //then add them to navigation drawer

        sNavigationDrawer.setMenuItemList(menuItems);
        fragmentClass = Pizza.class;
        try {
            fragment = (Fragment) fragmentClass.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (fragment != null) {
            FragmentManager fragmentManager = getFragmentManager();
            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out).replace(R.id.frameLayout, fragment).commit();
        }


        //Listener to handle the menu item click. It returns the position of the menu item clicked. Based on that you can switch between the fragments.

        sNavigationDrawer.setOnMenuItemClickListener(new SNavigationDrawer.OnMenuItemClickListener() {
            @Override
            public void onMenuItemClicked(int position) {
                System.out.println("Position " + position);

                switch (position) {
                    case 0: {
                        fragmentClass = Pizza.class;
                        break;
                    }
                    case 1: {
                        fragmentClass = Pasta.class;
                        break;
                    }
                    case 2: {
                        fragmentClass = Appetizer.class;
                        break;
                    }
                    case 3: {
                        fragmentClass = Drink.class;
                        break;
                    }
                    case 4: {
                        fragmentClass = Salad.class;
                        break;
                    }


                }

                //Listener for drawer events such as opening and closing.
                sNavigationDrawer.setDrawerListener(new SNavigationDrawer.DrawerListener() {

                    @Override
                    public void onDrawerOpened() {

                    }

                    @Override
                    public void onDrawerOpening() {

                    }

                    @Override
                    public void onDrawerClosing() {
                        System.out.println("Drawer closed");

                        try {
                            fragment = (Fragment) fragmentClass.newInstance();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                        if (fragment != null) {
                            FragmentManager fragmentManager = getFragmentManager();
                            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out).replace(R.id.frameLayout, fragment).commit();

                        }
                    }

                    @Override
                    public void onDrawerClosed() {

                    }

                    @Override
                    public void onDrawerStateChanged(int newState) {
                        System.out.println("State " + newState);
                    }
                });
            }
        });

        return view;
    }
}