import React, { useState } from 'react';
import axios from 'axios';
import './request.css';

function Request(props) {

  const [city, setCity] = useState('');

  async function handleSubmit() {
    try {
      const response = await axios.get(`http://localhost:8000/weather?city=${city}`);
      props.setWeatherInfo(response.data);
      props.setIsDataFetched(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }


  return (
    <div id='requestContainer'>
      <p>
        Use our weather app to see the weather around the world
      </p>
      <div id='labelContainer'>
        <label>City name</label>
        <div id='inputContainer'>
          <input type="text" placeholder="Enter city name" value={city} onChange={event => setCity(event.target.value)} />
          <button onClick={() => handleSubmit()}>Check</button>
        </div>
      </div>
    </div>
  )
}

export default Request