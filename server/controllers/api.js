// Importing Modules
const GeoIP = require('simple-geoip'); 
var axios = require("axios").default;
const  {
    removeSensitiveData, 
    removeUnnecessaryData 
} = require('../utility/functions');
const dotenv = require('dotenv').config();

// Sending climate data fetched from api
const airQualityData = (req, res) => {
    let geoIP = new GeoIP('at_nEGZx2X4Fgjxve5jdjrxasNCi2a35');
    geoIP.lookup(req.body.ip, (err, data) => {
        if (err) throw err;
        var options = {
            method: 'GET',
            url: 'https://api.ambeedata.com/latest/by-city',
            params: {city: `${data.location.city}`},
            headers: {'x-api-key': `${process.env.AMBEE_KEY}`, 'Content-type': 'application/json'}
          };
          axios.request(options).then(function (response) {
              let airQuality = removeUnnecessaryData(response.data);
              res.status(200).json(airQuality);
          }).catch(function (error) {
             console.error(error);
          });
    });
};

// Exporting Modules
module.exports = airQualityData;