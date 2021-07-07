package com.example.farmingscout;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    ImageView weatherButton;
    ImageView farmingButton;
    ImageView soilButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        weatherButton = findViewById(R.id.imageView);
        farmingButton = findViewById(R.id.imageView3);
        soilButton = findViewById(R.id.imageView2);

        weatherButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this, weatherActivity.class);
                startActivity(i);
            }
        });

        farmingButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this, farmingActivity.class);
                startActivity(i);
            }
        });

        soilButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this, soilActivity.class);
                startActivity(i);
            }
        });
    }
}