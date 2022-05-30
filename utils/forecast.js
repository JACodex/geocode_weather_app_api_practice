const request = require('postman-request');

const forecast = (lat, long, callback)=>{

    const url = process.env.URL + long +',' + lat + "&units=f";

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Error: ' + error, undefined)
        }else if (response === undefined){
            callback('Error:  request failed')
        }else{
            callback(undefined, response.body)

        }
    })
}

const forecastLocation = (locationName, callback)=>{
    const url = process.env.URL + locationName + "&units=f"
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Error: ' + error, undefined)
        }else if (response === undefined){
            callback('Error:  request failed', undefined)
        }else{
            callback(undefined, response.body)
        }
    })
}

module.exports = {forecastLat: forecast, forecastLocation: forecastLocation}