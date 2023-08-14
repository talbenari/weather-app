const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();

app.use(cors());


app.get('/weather', async (req, res) => {
    try {
      const { city } = req.query;
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=${city}&aqi=no`;
      
      const response = await axios.get(apiUrl);
      const weatherData = response.data;
      console.log(weatherData);
  
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching weather data.' });
    }
  });





app.listen(8000, () => console.log('listening on port 8000'));