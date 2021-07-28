from flask import Flask
import requests
import json

app = Flask(__name__)

@app.route('/soil')
def index():
    response = requests.get('https://api.weatherbit.io/v2.0/history/agweather?lat=38.0&lon=-78.0&start_date=2021-07-15&end_date=2021-07-16&key=05928d64d3c3463b93a289b8def76ea1')
    data = response.json()

    date = []
    bsd = []
    stmax = []
    stavg = []
    stmin = []
    tempavg = []
    precip = []
    spechum = []
    evap = []
    presavg = []
    wind10m = []
    dlwtf_avg = []
    dlwrf_max = []
    dswrf_avg = []
    dswrf_max = []
    dswrf_net = []
    dlwrf_net = []
    soilm_0_10cm = []
    soilm_10_40cm = []
    soilm_40_100cm = []
    soilm_100_200cm = []
    v_soilm_0_10cm = []
    v_soilm_10_40cm = []
    v_soilm_40_100cm = []
    v_soilm_100_200cm = []
    soilt_0_10cm = []
    soilt_10_40cm = []
    soilt_40_100cm = []
    soilt_100_200cm = []

    for i in range(0,1):
        date1 = data['data'][i]['valid_date']
        v_soilm_40_100cm1 = data['data'][i]['v_soilm_40_100cm']
        dlwrf_avg1 = data['data'][i]['dlwrf_avg']
        stmin1 = data['data'][i]['skin_temp_min']
        v_soilm_10_40cm1 = data['data'][i]['v_soilm_10_40cm']
        soilm_40_100cm1 = data['data'][i]['soilm_40_100cm']
        dlwrf_max1 = data['data'][i]['dlwrf_max']
        dlwrf_net1 = data['data'][i]['dlwrf_net']
        soilm_0_10cm1 = data['data'][i]['soilm_0_10cm']
        spechum1 = data['data'][i]['specific_humidity']
        evap1 = data['data'][i]['evapotranspiration']
        soilm_10_40cm1 = data['data'][i]['soilm_10_40cm']
        v_soilm_100_200cm1 = data['data'][i]['v_soilm_100_200cm']
        soilt_100_200cm1 = data['data'][i]['soilt_100_200cm']
        bsd1 = data['data'][i]['bulk_soil_density']
        tempavg1 = data['data'][i]['temp_2m_avg']
        dswrf_net1 = data['data'][i]['dswrf_net']
        v_soilm_0_10cm1 = data['data'][i]['v_soilm_0_10cm']
        soilt_0_10cm1 = data['data'][i]['soilt_0_10cm']
        wind10m1 = data['data'][i]['wind_10m_spd_avg']
        precip1 = data['data'][i]['precip']
        dswrf_avg1 = data['data'][i]['dswrf_avg']
        presavg1 = data['data'][i]['pres_avg']
        soilm_100_200cm1 = data['data'][i]['soilm_100_200cm']
        soilt_40_100cm1 = data['data'][i]['soilt_40_100cm']
        soilt_10_40cm1 = data['data'][i]['soilt_10_40cm']
        dswrf_max1 = data['data'][i]['dswrf_max']
        stavg1 = data['data'][i]['skin_temp_avg']
        stmax1 = data['data'][i]['skin_temp_max']
        date.append(date1)
        v_soilm_40_100cm.append(v_soilm_40_100cm1)
        dlwtf_avg.append(dlwrf_avg1)
        stmin.append(stmin1)
        v_soilm_10_40cm.append(v_soilm_10_40cm1)
        soilm_40_100cm.append(soilm_40_100cm1)
        dlwrf_max.append(dlwrf_max1)
        dlwrf_net.append(dlwrf_net1)
        soilm_0_10cm.append(soilm_0_10cm1)
        spechum.append(spechum1)
        evap.append(evap1)
        soilm_10_40cm.append(soilm_10_40cm1)
        v_soilm_100_200cm.append(v_soilm_100_200cm1)
        soilt_100_200cm.append(soilt_100_200cm1)
        bsd.append(bsd1)
        tempavg.append(tempavg1)
        dswrf_net.append(dswrf_net1)
        v_soilm_0_10cm.append(v_soilm_0_10cm1)
        soilt_0_10cm.append(soilt_0_10cm1)
        wind10m.append(wind10m1)
        precip.append(precip1)
        dswrf_avg.append(dswrf_avg1)
        presavg.append(presavg1)
        soilm_100_200cm.append(soilm_100_200cm1)
        soilt_40_100cm.append(soilt_40_100cm1)
        soilt_10_40cm.append(soilt_10_40cm1)
        dswrf_max.append(dswrf_max1)
        stavg.append(stavg1)
        stmax.append(stmax1)

    results = {
        "date":date,
        "v_soilm_40_100cm":v_soilm_40_100cm,
        "dlwtf_avg":dlwtf_avg,
        "stmin":stmin,
        "v_soilm_10_40cm":v_soilm_10_40cm,
        "soilm_40_100cm":soilm_40_100cm,
        "dlwrf_max":dlwrf_max,
        "dlwrf_net":dlwrf_net,
        "soilm_0_10cm":soilm_0_10cm,
        "spechum":spechum,
        "evap":evap,
        "soilm_10_40cm":soilm_10_40cm,
        "v_soilm_100_200cm":v_soilm_100_200cm,
        "soilt_100_200cm":soilt_100_200cm,
        "bsd":bsd,
        "tempavg":tempavg,
        "dswrf_net":dswrf_net,
        "v_soilm_0_10cm":v_soilm_0_10cm,
        "soilt_0_10cm":soilt_0_10cm,
        "wind10m":wind10m,
        "precip":precip,
        "dswrf_avg":dswrf_avg,
        "presavg":presavg,
        "soilm_100_200cm":soilm_100_200cm,
        "soilt_40_100cm":soilt_40_100cm,
        "soilt_10_40cm":soilt_10_40cm,
        "dswrf_max":dswrf_max,
        "stavg":stavg,
        "stmax":stmax
    }

    return results



