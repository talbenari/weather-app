import React from 'react'
import './mainPage.css'
import Request from '../components/Request';
import Result from '../components/Result';
import { useState } from 'react';
import { useEffect } from 'react';

function MainPage() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);


  useEffect(() => {
    if (isLoading) {
      setIsDataFetched(false)
    }
    if (isDataFetched) {
      setIsLoading(false)
    }
  }, [isDataFetched, isLoading])

  function displayData() {
    if (!isDataFetched && isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }
    else if (!isDataFetched && !isLoading) {
      return
    }
    else {
      return (
        <Result weatherInfo={weatherInfo} />
      )
    }
  }


  return (
    <div id='mainPage'>
      <div id='req'>
        <Request setWeatherInfo={setWeatherInfo} setIsDataFetched={setIsDataFetched} setIsLoading={setIsLoading} />
      </div>
      <div id='res'>
        {displayData()}
      </div>

    </div>
  )
}

export default MainPage