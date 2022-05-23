require('dotenv').config();
const { parse } = require('dotenv');
let express = require('express');
const weatherRouter = express.Router();
let request = require('request');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

weatherRouter.get('/current-weather',(req,res)=>{
    let countryCode = 'za';
    let zipCode = '0116';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${WEATHER_API_KEY}`; 
    request(apiUrl,async (err,response,body)=>{
        if(!err){
            res.status(200);
            try {
                let parsed = await JSON.parse(body);
                // Getting country, name(area), icon, description, temp, temp_min, temp_max, humidity from the api and setting as array
                let apiIcon = parsed.weather[0].icon;
                dataObj ={
                    country: parsed.sys.country,
                    area: parsed.name,
                    icon: `http://openweathermap.org/img/wn/${apiIcon}@2x.png`,
                    temp: parsed.main.temp,
                    tempmax: parsed.main.temp_max,
                    tempmin: parsed.main.temp_min,
                    humidity: parsed.main.humidity,
                }
                console.log(dataObj);
                res.send(dataObj);
            } catch (error) {
                console.log(error);
            }
            
        } else{
            res.status(404);
            console.log(err);
        }
    })
});

module.exports = weatherRouter;