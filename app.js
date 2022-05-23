require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

let express = require('express');
let app = express();

app.listen(PORT,HOST, ()=>{
    console.log(`Listening on http://${HOST}:${PORT}`);
});