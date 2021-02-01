const req =require('postman-request')

const forecast = (lat,lon,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=47b92e5612680df5e2204efdb87083bb&query=' + lat +','+ lon + '&units=m' //m= celcius,f=farenhite,s=kelvin

    req({ url,json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        } else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            callback( undefined,
                'Current weather of '+body.location.name+' ( '+ body.location.region+' ), '+body.location.country+' is '+body.current.weather_descriptions[0]+
                '. Current temprature is ' +body.current.temperature +
                ' and humidity is '+ body.current.humidity
            )
        }
    })
}
// geocode('Bhopal',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })
module.exports = forecast