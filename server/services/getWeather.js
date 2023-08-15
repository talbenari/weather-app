const axios = require("axios");


exports.getWeather = async (req, res) => {
  
    try {
      const { city } = req.query;
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=${city}&aqi=no`;
  
      const response = await axios.get(apiUrl);
      const weatherData = response.data;
  
      res.json(weatherData);
      
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        const statusCode = error.response.status;
        let errorMessage = 'API error occurred';
  
        if (statusCode === 404 || statusCode === 400) {
          errorMessage = 'City not found or invalid input';
        } else if (statusCode === 500) {
          errorMessage = 'Internal server error';
        }
        res.status(statusCode).json({ error: errorMessage });
      }
    }
  };