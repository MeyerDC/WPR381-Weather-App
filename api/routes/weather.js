require('dotenv').config();
let express = require('express');
const weatherRouter = express.Router();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

weatherRouter.get('/current-weather',(req,res)=>{
    let lat = 33.44;
    let lon = -94.04;
    let APIkey = WEATHER_API_KEY;
    res.json(`api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`)
});

module.exports = weatherRouter;