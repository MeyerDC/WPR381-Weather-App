require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

let express = require('express');
let app = express();

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Listening on http://${HOST}:${PORT}`);
})

const weatherRouter = require('./routes/weather');

app.use('/weather',weatherRouter)