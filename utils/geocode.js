const request = require('postman-request')


const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?&' + process.env.MAPBOX_URL_APPEND_ACCESSTOKEN_END; //replace MAPBOX_URL_APPEND_ACCESSTOKEN_END with access_token={own APi Token}

    request({ url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services', undefined);
        } else if( response.body.message === 'Not Found'){
            callback('Unable to find location. Try another search:' + response.body.message, undefined)
        }else{
            callback(undefined, {
                latitude:  response.body.features[0].center[0],
                longitude:  response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;