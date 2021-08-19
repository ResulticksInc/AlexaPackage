
const fetch = require('node-fetch');


export default class Alexa {


 makeSdkRequest = (url, params) => {

    return fetch(url, { method: POST_METHOD, headers: headers, body: JSON.stringify(params) })
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

 headers = {

    "Accept": "application/json",
    "Token": "TDdvMFN5MndnM09pdjhEYlBBdXBSSWFhOGx2NFRIU3hZRXBjSFRqY0QxVT06SE1BQ19TSEEyNTY6",
    "Accept-Language": "UTF-8",
    "content-type": "application/json",
    "User-Agent": "iOS"
}

akvParams = {

    "appId": "18d526d9-de3c-41d3-b623-d7fc47f88335",
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

POST_METHOD = "POST"
AKV_URL = "https://teamsdk.resulticks.net/home/apiKeyValidation"

    apikeyvalidation()  {
        return new Promise(function(resolve, reject) {
            try {
                let message = await makeSdkRequest(AKV_URL, akvParams)
                console.log(message);
                resolve(message)
    
            } catch (error) {
                reject(error)
            }
        })
        
    }
    
    
    apikeyvalidation1()  {
        return new Promise(function(resolve, reject) {
            try {
                let message = makeSdkRequest(AKV_URL, akvParams)
                console.log(message);
                resolve(message)
    
            } catch (error) {
                reject(error)
            }
        })
        
    }
}




