import React from 'react'
import './result.css'


function Result(props) {

  console.log(props.weatherInfo);

  return (
    <div id='resultContainer'>
      <div id='locationContainer'>
        <h2>{props.weatherInfo?.location.name}</h2>
        <h3>{props.weatherInfo?.location.country}</h3>
      </div>
      <div id='tempContainer'>
        {props.weatherInfo?.current.temp_c}
      </div>
    </div>
  )
}

export default Result