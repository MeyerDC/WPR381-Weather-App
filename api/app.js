require('dotenv').config();
let express = require('express');
let app = express();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;
app.use(express.json());
try {
    app.listen(PORT, ()=>{
        console.log(`Listening on http://${HOST}:${PORT}`);
    }) 
} catch (error) {
    console.log(error);
}

const weatherRouter = require('./routes/weather');

app.use('/weather',weatherRouter);