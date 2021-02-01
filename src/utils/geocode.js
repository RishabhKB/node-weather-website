const req =require('postman-request')

const geocode = (address,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=47b92e5612680df5e2204efdb87083bb&query=' + address + '&units=m' //m= celcius,f=farenhite,s=kelvin

    req({ url,json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        } else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            callback(
                undefined,{// weather_descriptions:response.body.current.weather_descriptions[0],
                lat: body.location.lat,
                lon: body.location.lon,
                location:body.location.name
                }
            )
              // response.body.current.weather_descriptions[0]+'. Current temprature is ' +response.body.current.temperature+ ' and humidity is '+response.body.current.humidity)
        }  
    })
}
// geocode('Bhopal',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })
module.exports = geocode