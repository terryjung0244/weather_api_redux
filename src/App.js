import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

const App = () => {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('currentLocation', lat, lon);
      getWeahterByCurrentLocation(lat, lon);
    });

    const getWeahterByCurrentLocation = async (lat, lon) => {
      const API_KEY = '4b917ff881afce42f8453ca1be779805'
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      let response = await fetch(url)
      let data = await response.json();
      console.log('data', data)
      setWeather(data)
    }
    
  };

  useEffect(() => {
    getCurrentLocation()  
  }, [])

  return (
    <div>
      <div className='mainContainer'>
        <WeatherBox weather={weather} />
        <WeatherButton/>
      </div>
    </div>
  )
}

export default App
  