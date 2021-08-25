const express = require('express');
const fetch = require('node-fetch');

module.exports.makeResutlickApicall = () => {

    return fetch(RUN_AKV_URL, { method: POST_METHOD, headers: headers, body: JSON.stringify(akvParams) })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(JSON.stringify(json));            
            return json.message || json.Message
        })
        .catch(err => {
            console.log(err);
            return "server error"
        })
}

// module.exports.makeResutlickApicall = () => {

//     return new Promise((resolve,reject) => {
//         return fetch(RUN_AKV_URL, { method: POST_METHOD, headers: headers, body: JSON.stringify(akvParams) })
//         .then((res) => {
//             return res.json()
//         })
//         .then((json) => {
//             console.log(JSON.stringify(json));  
//             resolve(json.message)          
//            // return json.message || json.Message
//         })
//         .catch(err => {
//             console.log(err);
//             reject("server error")
//             //return "server error"
//         })
//     })

   
// }

const headers = {

    "Accept": "application/json",
    "Token": "TDdvMFN5MndnM09pdjhEYlBBdXBSSWFhOGx2NFRIU3hZRXBjSFRqY0QxVT06SE1BQ19TSEEyNTY6",
    "Accept-Language": "UTF-8",
    "content-type": "application/json",
    "User-Agent": "iOS"
}

const akvParams = {

    "appId": RUN_APP_ID,
    "mobileNetworkOperator": "Jio",
    "networkType": "",
    "packageName": "com.resulticks.visionbank",
    "rootAccess": false,
    "appVersionCode": "46",
    "deviceId": "F122DFEF-E29F-4EFB-971F-CDDD64AC71BD",
    "appInstallDate": "2021-08-19T13:01:37.031+0530",
    "isWifiEnabled": true,
    "deviceLanguage": "en-NO",
    "deviceModel": "iPhone",
    "appUpdateDate": "2021-08-19T13:01:37.031+0530",
    "region": "NO",
    "timezone": "Asia\/Kolkata",
    "ipAddress": "192.168.29.208",
    "deviceType": "iPhone",
    "deviceCountry": "Norway",
    "deviceManufacture": "Apple",
    "sessionId": "F122DFEF-E29F-4EFB-971F-CDDD64AC71BD_1629358296.989303",
    "resolution": {
        "height": 812,
        "width": 375
    },
    "deviceName": "Resulticks iPhone11pro",
    "screenResolution": "375.0 * 812.0",
    "appVersionName": "1.0",
    "deviceOs": "iOS",
    "deviceOsVersion": "14.6",
    "appLanguage": "en-NO",
    "currency": "NOK",
    "sdkVersion": "2.0.0"
}

const POST_METHOD = "POST"
//Team
const TEAM_AKV_URL = "https://teamsdk.resulticks.net/home/apiKeyValidation"
const TEAM_APP_ID = "18d526d9-de3c-41d3-b623-d7fc47f88335"


//RUN
const RUN_AKV_URL = "https://mobis.resu.io/home/sdkRegistration"
const RUN_APP_ID = "6036e22e-4a43-40e1-ba90-b6000917dc45"