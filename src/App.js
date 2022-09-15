import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { useDispatch, useSelector } from 'react-redux';
import { getWeahterByCurrentLocationRequest } from './weather/weatherAction';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  const dispatch = useDispatch();
  const weatherReducerSelector = useSelector(state => state.weatherReducer);

  const [weather, setWeather] = useState(null);
  const cities = ['New York', 'Belin', 'New Delhi', 'San Jose'];
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('currentLocation', lat, lon);
      getWeahterByCurrentLocation(position.coords.latitude, position.coords.longitude);
    });

    const getWeahterByCurrentLocation = async (lat, lon) => {
      dispatch(getWeahterByCurrentLocationRequest({lat, lon}))
      // setLoading(true);
      // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      // let response = await fetch(url)
      // let data = await response.json();
      // console.log('data', data)
      // setWeather(data)
      // setLoading(false);
      
    }
  };


  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false);
  }

  useEffect(() => {
    if (city === null) {
      getCurrentLocation() 
    } else {
      getWeatherByCity()
    }
  }, [city])

  console.log(weatherReducerSelector.weather.loading)

  return (
    <div>
      <div className='mainContainer'>
        <WeatherBox weather={weather}  />
        <WeatherButton cities={cities} setCity={setCity} />
        <div style={{height: '25px'}}>
          {weatherReducerSelector.weather.loading ? <div><ClipLoader color='f88c6b' loading={loading} size={150} /></div> : <div></div>}     
        </div>
      </div>
    </div>
  )
}

export default App
  