// const GeoIP = require('simple-geoip'); 
// const request = require('request');

// let geoIP = new GeoIP('at_nEGZx2X4Fgjxve5jdjrxasNCi2a35');
// geoIP.lookup('190.2.138.17', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//    const options = {
//         method: 'GET',
//         url: 'https://api.ambeedata.com/latest/by-city',
//         qs: {city: `${data.location.city}`},
//         headers: {'x-api-key': 'c12b6d8549a13d1d4a280adb6e8cb5ef0d0aefc4b126ff4b1d9af895c3be5851', 'Content-type': 'application/json'}
//     };
//     request(options, function (error, response, body) {
// 	    if (error) throw new Error(error);
// 	    console.log(body);
//     });
// });
// {
//     "message":"success",
//     "stations":[
//         {
//             "_id":"60363da68f2bb86af93d63ed",
//             "placeId":"44e66b265fb89ce8881110669c0a192673c8ad96c3ffb8f119d8cd7a9210c406",
//             "CO":0.154,
//             "NO2":8.198,
//             "OZONE":33.977,
//             "PM10":14.823,
//             "PM25":5.917,
//             "SO2":0.163,
//             "city":"Amsterdam",
//             "countryCode":"NL",
//             "division":"",
//             "lat":52.371,
//             "lng":4.9041,
//             "placeName":"Amsterdam",
//             "postalCode":"1011",
//             "state":"Noord-Holland",
//             "updatedAt":"2022-02-18 03:00:00",
//             "AQI":31,"aqiInfo":{
//                 "pollutant":"O3",
//                 "concentration":33.977,
//                 "category":"Good"
//             }
//         }
//     ]
// }

// const request = require('request');
// const options = {
//   method: 'GET',
//   url: 'https://api.ambeedata.com/latest/by-city',
//   qs: {city: 'Bengaluru'},
//   headers: {'x-api-key': 'c12b6d8549a13d1d4a280adb6e8cb5ef0d0aefc4b126ff4b1d9af895c3be5851', 'Content-type': 'application/json'}
// };
// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     console.log(body);
// });

// return;

const GeoIP = require('simple-geoip'); 
const request = require('request');

let geoIP = new GeoIP('at_nEGZx2X4Fgjxve5jdjrxasNCi2a35');
geoIP.lookup('49.36.117.56', (err, data) => {
   if (err) throw err;
   console.log(data);
});