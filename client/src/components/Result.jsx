import React from 'react'
import './result.css'


function Result(props) {

  return (
    <div id='resultContainer'>
      <div id='locationContainer'>
        <div id='city'>{props.weatherInfo?.location.name}</div>
        <div id='country'>{props.weatherInfo?.location.country}</div>
      </div>
      <div id='tempContainer'>
        {props.weatherInfo?.current.temp_c}°
      </div>
      <div id='additionalInfoContainer'>
        <div className='infoWrapper'>
          <div className='infoTitle'>Precipitation</div>
          <div className='additionalInfo'>{props.weatherInfo?.current.precip_mm} mm</div>
        </div>
        <div className='infoWrapper'>
          <div className='infoTitle'>Humidity</div>
          <div className='additionalInfo'>{props.weatherInfo?.current.humidity}%</div>
        </div>
        <div className='infoWrapper'>
          <div className='infoTitle'>wind</div>
          <div className='additionalInfo'>{props.weatherInfo?.current.wind_kph} km/h</div>
        </div>
      </div>
    </div>
  )
}

export default Result