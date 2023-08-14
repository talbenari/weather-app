import React, { useState } from 'react';
import axios from 'axios';
import './request.css';

function Request(props) {

  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit() {

    props.setIsLoading(true);

    try {

      if (city === '') {
        setErrorMessage('Please enter a city');
        props.setIsLoading(false);
      }

      else {
        const response = await axios.get(`http://localhost:8000/weather?city=${city}`);

        props.setWeatherInfo(response.data);
        props.setIsLoading(false);
        props.setIsDataFetched(true);
        setErrorMessage(null);
        setCity('');
      }

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage(error?.response?.data?.error)
      props.setIsLoading(false);
      props.setIsDataFetched(false);
    }
  }


  return (
    <div id='requestContainer'>
      <p id='requestParagraph'>
        Use our weather app to see the weather around the world
      </p>
      <div id='labelContainer'>
        <label id='inputLabel'>City name</label>
        <div id='inputContainer'>
          <input type="text" value={city} onChange={event => setCity(event.target.value)} />
          <button onClick={() => handleSubmit()}>Check</button>
        </div>
        {
          errorMessage &&
          <p id='errorMessage'>{errorMessage}</p>
        }
      </div>
    </div>
  )
}

export default Request