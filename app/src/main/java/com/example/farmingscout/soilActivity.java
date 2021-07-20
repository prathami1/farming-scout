package com.example.farmingscout;

import androidx.appcompat.app.AppCompatActivity;

import android.os.AsyncTask;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.JsonReader;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.Date;

public class soilActivity extends AppCompatActivity {

    String content;
    EditText LatText;
    EditText LongText;
    String s1, s2;
    Button b;
    TextView temp1,temp2,temp3,date1,date2,date3,city1,city2,city3,time1,time2,time3;
    JSONArray rootArray;
    String x,y,z;
    String temp;
    StringBuilder stringBuilder;
    URL url;
    String subName1, subName2, subName3;
    TextView cw, circle;
    TextView desc1, desc2, desc3;
    String subDesc1, subDesc2, subDesc3;
    String subDT;
    ImageView i1;
    ImageView i2;
    ImageView i3;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        LatText = findViewById(R.id.editTextTextPersonName);
        LongText = findViewById(R.id.editTextTextPersonName2);
        temp1=findViewById(R.id.textView);
        temp2=findViewById(R.id.textView3);
        temp3=findViewById(R.id.textView5);
        city1=findViewById(R.id.textView2);
        city2=findViewById(R.id.textView4);
        city3=findViewById(R.id.textView6);
        b=findViewById(R.id.button);
        cw=findViewById(R.id.textView7);
        circle=findViewById(R.id.textView8);
        desc1=findViewById(R.id.textView11);
        desc2 = findViewById(R.id.textView14);
        desc3=findViewById(R.id.textView17);
        time1=findViewById(R.id.textView9);
        time2=findViewById(R.id.textView12);
        time3=findViewById(R.id.textView15);
        date1=findViewById(R.id.textView10);
        date2=findViewById(R.id.textView13);
        date3=findViewById(R.id.textView16);
        i1=findViewById(R.id.imageView);
        i2=findViewById(R.id.imageView2);
        i3=findViewById(R.id.imageView3);

        cw.setText("Current Weather");
        circle.setText("3 cities in a circle");
        temp1.setText("Temp for City1");
        temp2.setText("Temp for City2");
        temp3.setText("Temp for City3");
        desc1.setText("desc1");
        desc2.setText("desc2");
        desc3.setText("desc3");
        time1.setText("time1");
        time2.setText("time2");
        time3.setText("time3");
        date1.setText("date1");
        date2.setText("date2");
        date3.setText("date3");


        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                s1= LatText.getText().toString();
                s2= LongText.getText().toString();
                try {
                    url = new URL("https://api.weatherbit.io/v2.0/history/agweather?lat=" + s1 + "&lon=" + s2 + "&start_date=2021-07-15&end_date=2021-07-16&key=05928d64d3c3463b93a289b8def76ea1");
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                new Weather().execute(url);

            }
        });

/*
        LatText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                s1 = s.toString();
            }
            @Override
            public void afterTextChanged(Editable s) {
            }
        });
        LongText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                s2= s.toString();
            }
            @Override
            public void afterTextChanged(Editable s) {
            }
        });
*/

    }



    public class Weather extends AsyncTask<URL, Void, Void> {
        protected Void doInBackground(URL... urls) {


            try {
                URL url = urls[0];
                Log.d("BBBBB", urls[0].toString());
                stringBuilder= new StringBuilder();

                URLConnection urlConnection = url.openConnection();

                InputStream is = urlConnection.getInputStream();

                BufferedReader br = new BufferedReader(new InputStreamReader(is));

                while ((temp = br.readLine()) != null) {
                    stringBuilder.append(temp);
                }
                String s = stringBuilder.toString();

                rootArray = new JSONArray();
                /*
                try {
                x = rootArray.getJSONArray("data").getString("v_soilm_40_100cm");
                y = rootArray.getJSONArray("data").getString("dlwrf_avg");
                }
                catch {
                    jsonException.printStackTrace();
                }
                 */


            } catch (Exception e) {
                e.printStackTrace();
                Log.d("error", e.toString());
            }

            return null;


        }

        protected void onProgressUpdate(Void... progress) {
        }

        protected void onPostExecute(Void result) {

            temp1.setText(x);
            temp2.setText(y);
            temp3.setText(z);
            city1.setText(subName1);
            city2.setText(subName2);
            city3.setText(subName3);
            desc1.setText(subDesc1);
            desc2.setText(subDesc2);
            desc3.setText(subDesc3);
            time1.setText(timez(subDT));
            time2.setText(timez(subDT));
            time3.setText(timez(subDT));
            date1.setText(datez(subDT));
            date2.setText(datez(subDT));
            date3.setText(datez(subDT));

            /*
            try {
                String a = rootObject.getJSONArray("list").getJSONObject(0).getJSONArray("weather").getJSONObject(0).getString("icon");
                String b = rootObject.getJSONArray("list").getJSONObject(1).getJSONArray("weather").getJSONObject(0).getString("icon");
                String c= rootObject.getJSONArray("list").getJSONObject(2).getJSONArray("weather").getJSONObject(0).getString("icon");

                if(a.equalsIgnoreCase("01d"))
                    i1.setImageResource(R.drawable.oned);
                if(a.equalsIgnoreCase("01n"))
                    i1.setImageResource(R.drawable.onen);
                if(a.equalsIgnoreCase("02n"))
                    i1.setImageResource(R.drawable.twon);
                if(a.equalsIgnoreCase("02d"))
                    i1.setImageResource(R.drawable.twod);
                if(a.equalsIgnoreCase("03d"))
                    i1.setImageResource(R.drawable.threedn);
                if(a.equalsIgnoreCase("03n"))
                    i1.setImageResource(R.drawable.threedn);
                if(a.equalsIgnoreCase("04d"))
                    i1.setImageResource(R.drawable.fourdn);
                if(a.equalsIgnoreCase("04n"))
                    i1.setImageResource(R.drawable.fourdn);
                if(a.equalsIgnoreCase("00d"))
                    i1.setImageResource(R.drawable.ninedn);
                if(a.equalsIgnoreCase("09n"))
                    i1.setImageResource(R.drawable.fourdn);
                if(a.equalsIgnoreCase("10d"))
                    i1.setImageResource(R.drawable.tend);
                if(a.equalsIgnoreCase("10n"))
                    i1.setImageResource(R.drawable.tenn);
                if(a.equalsIgnoreCase("11d"))
                    i1.setImageResource(R.drawable.oneonedn);
                if(a.equalsIgnoreCase("11n"))
                    i1.setImageResource(R.drawable.oneonedn);
                if(a.equalsIgnoreCase("13d"))
                    i1.setImageResource(R.drawable.onethreedn);
                if(a.equalsIgnoreCase("13n"))
                    i1.setImageResource(R.drawable.onethreedn);
                if(a.equalsIgnoreCase("50d"))
                    i1.setImageResource(R.drawable.fivezerodn);
                if(a.equalsIgnoreCase("13n"))
                    i1.setImageResource(R.drawable.fivezerodn);

                if(b.equalsIgnoreCase("01d"))
                    i2.setImageResource(R.drawable.oned);
                if(b.equalsIgnoreCase("01n"))
                    i2.setImageResource(R.drawable.onen);
                if(b.equalsIgnoreCase("02n"))
                    i2.setImageResource(R.drawable.twon);
                if(b.equalsIgnoreCase("02d"))
                    i2.setImageResource(R.drawable.twod);
                if(b.equalsIgnoreCase("03d"))
                    i2.setImageResource(R.drawable.threedn);
                if(b.equalsIgnoreCase("03n"))
                    i2.setImageResource(R.drawable.threedn);
                if(b.equalsIgnoreCase("04d"))
                    i2.setImageResource(R.drawable.fourdn);
                if(b.equalsIgnoreCase("04n"))
                    i2.setImageResource(R.drawable.fourdn);
                if(b.equalsIgnoreCase("00d"))
                    i2.setImageResource(R.drawable.ninedn);
                if(b.equalsIgnoreCase("09n"))
                    i2.setImageResource(R.drawable.fourdn);
                if(b.equalsIgnoreCase("10d"))
                    i2.setImageResource(R.drawable.tend);
                if(b.equalsIgnoreCase("10n"))
                    i2.setImageResource(R.drawable.tenn);
                if(b.equalsIgnoreCase("11d"))
                    i2.setImageResource(R.drawable.oneonedn);
                if(b.equalsIgnoreCase("11n"))
                    i2.setImageResource(R.drawable.oneonedn);
                if(b.equalsIgnoreCase("13d"))
                    i2.setImageResource(R.drawable.onethreedn);
                if(b.equalsIgnoreCase("13n"))
                    i2.setImageResource(R.drawable.onethreedn);
                if(b.equalsIgnoreCase("50d"))
                    i2.setImageResource(R.drawable.fivezerodn);
                if(b.equalsIgnoreCase("13n"))
                    i2.setImageResource(R.drawable.fivezerodn);

                if(c.equalsIgnoreCase("01d"))
                    i3.setImageResource(R.drawable.oned);
                if(c.equalsIgnoreCase("01n"))
                    i3.setImageResource(R.drawable.onen);
                if(c.equalsIgnoreCase("02n"))
                    i3.setImageResource(R.drawable.twon);
                if(c.equalsIgnoreCase("02d"))
                    i3.setImageResource(R.drawable.twod);
                if(c.equalsIgnoreCase("03d"))
                    i3.setImageResource(R.drawable.threedn);
                if(c.equalsIgnoreCase("03n"))
                    i3.setImageResource(R.drawable.threedn);
                if(c.equalsIgnoreCase("04d"))
                    i3.setImageResource(R.drawable.fourdn);
                if(c.equalsIgnoreCase("04n"))
                    i3.setImageResource(R.drawable.fourdn);
                if(c.equalsIgnoreCase("00d"))
                    i3.setImageResource(R.drawable.ninedn);
                if(c.equalsIgnoreCase("09n"))
                    i3.setImageResource(R.drawable.fourdn);
                if(c.equalsIgnoreCase("10d"))
                    i3.setImageResource(R.drawable.tend);
                if(c.equalsIgnoreCase("10n"))
                    i3.setImageResource(R.drawable.tenn);
                if(c.equalsIgnoreCase("11d"))
                    i3.setImageResource(R.drawable.oneonedn);
                if(c.equalsIgnoreCase("11n"))
                    i3.setImageResource(R.drawable.oneonedn);
                if(c.equalsIgnoreCase("13d"))
                    i3.setImageResource(R.drawable.onethreedn);
                if(c.equalsIgnoreCase("13n"))
                    i3.setImageResource(R.drawable.onethreedn);
                if(c.equalsIgnoreCase("50d"))
                    i3.setImageResource(R.drawable.fivezerodn);
                if(c.equalsIgnoreCase("13n"))
                    i3.setImageResource(R.drawable.fivezerodn);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            */

        }
    }


    public String datez(String t)
    {
        Long p = Long.parseLong(t);
        Date xdate = new java.util.Date(p*1000L);
        SimpleDateFormat temp222 = new java.text.SimpleDateFormat("MM-dd-yyyy");
        String fd = temp222.format(xdate);
        return fd;
    }


    public String timez(String t)
    {
        Long p = Long.parseLong(t);
        Date xdate = new java.util.Date(p*1000L);
        SimpleDateFormat temp222 = new java.text.SimpleDateFormat("hh:mm a");
        temp222.setTimeZone(java.util.TimeZone.getTimeZone("EST"));
        String fd = temp222.format(xdate);
        return fd+" EST";
    }


}