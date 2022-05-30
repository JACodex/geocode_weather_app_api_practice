const request = require('postman-request');
require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

geocode('Boston', (error, data)=>{
    console.log('Error:', error);
    console.log('City Data', data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast.forecastLat(-75.7088, 44.1545, (error, data) => {
    console.log('Weather Error', error)
    console.log(`Temperature in ${data.location.name}, ${data.current.temperature}`)
  })

forecast.forecastLocation('Stockholm', (error, data)=>{
        console.log('Weather Error', error)
        console.log(`Temperature in ${data.location.name}, ${data.current.temperature}`)
})