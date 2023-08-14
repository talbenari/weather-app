import React from 'react'
import './mainPage.css'
import Request from '../components/Request';
import Result from '../components/Result';
import { useState } from 'react';

function MainPage() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  return (
    <div id='mainPage'>
      <Request setWeatherInfo={setWeatherInfo} setIsDataFetched={setIsDataFetched}/>
      {
        isDataFetched
          ?
          <Result weatherInfo={weatherInfo} />
          :
          <div></div>
      }
          </div>
  )
}

      export default MainPage