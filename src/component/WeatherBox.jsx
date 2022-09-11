import React from 'react'

const WeatherBox = ({ weather }) => { 
  console.log('weather?', weather )

  return (
    <div className='weatherBoxContainer'>
      <div className='blur'>
        {/* <div>{weather?.name}</div>
        <h2>{weather?.main.temp}</h2>
        <h3>{weather?.weather[0].description}</h3> */}
      </div>
    </div>
  )
}

export default WeatherBox
