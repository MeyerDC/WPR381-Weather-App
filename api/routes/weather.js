require('dotenv').config();
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
            let parsed = await JSON.parse(body);
            console.log(parsed);
        } else{
            res.status(404);
            console.log(err);
        }
    })
});

module.exports = weatherRouter;