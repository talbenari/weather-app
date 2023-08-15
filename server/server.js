const express = require('express');
const axios = require('axios');
const cors = require('cors');
const getWeather = require('./services/getWeather');


const app = express();

const port = process.env.PORT;

app.use(cors());


app.get('/weather', getWeather.getWeather);


app.listen(port, () => console.log(`listening on port ${port}`));