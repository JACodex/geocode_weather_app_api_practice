const request = require('postman-request');
require('dotenv').config();
const geocode = require('./utils/geocode');

geocode('Boston', (error, data)=>{
    console.log('Error:', error);
    console.log('City Data', data);
});