import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { useDispatch, useSelector } from 'react-redux';
import { getWeahterByCurrentLocationRequest, setPosition } from './weather/weatherAction';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  const dispatch = useDispatch();
  const { weatherData } = useSelector(state => state.weatherReducer);
  // const [position, setPosition] = useState(null);
  // const [weather, setWeather] = useState(null);
  const cities = ['New York', 'Belin', 'New Delhi', 'San Jose'];
  // const [city, setCity] = useState(null);
  // const [loading, setLoading] = useState(false);
  
  // const getCurrentLocation = () => {
  //   const a = navigator.geolocation.getCurrentPosition((position) => {
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     return { lat, lon }
  //     // console.log('currentLocation', lat, lon);
  //     // getWeahterByCurrentLocation(position.coords.latitude, position.coords.longitude);
  //   });

  //   const getWeahterByCurrentLocation = async (lat, lon) => {
  //     dispatch(getWeahterByCurrentLocationRequest({lat, lon}))
  //     // setLoading(true);
  //     // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  //     // let response = await fetch(url)
  //     // let data = await response.json();
  //     // console.log('data', data)
  //     // setWeather(data)
  //     // setLoading(false);
      
  //   }
  // };


  const setCity = async (country) => {
    console.log(country);
    // setLoading(true);
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    // let response = await fetch(url);
    // let data = await response.json();
    // // setWeather(data)
    // setLoading(false);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((paramPosition) => {
      dispatch(setPosition({
        lat: paramPosition.coords.latitude,
        lon: paramPosition.coords.longitude
      }))
    });
  }, []);

  useEffect(() => {
    if(weatherData.position) {
      dispatch(getWeahterByCurrentLocationRequest())
    }
  }, [weatherData.position]);

  // useEffect(() => {
  //   if(city) {
  //     getWeatherByCity()
  //   }
  // }, [city]);

  // console.log(weatherReducerSelector.weather.loading)

  console.log(weatherData.loading)

  return (
    <div>
      <div className='mainContainer'>
        <WeatherBox weather={weatherData.data}  />
        <WeatherButton cities={cities} setCity={setCity} />
        <div style={{height: '25px'}}>
          {weatherData.loading ? <div><ClipLoader color='f88c6b' loading={weatherData.loading} size={150} /></div> : <div></div>}     
        </div>
      </div>
    </div>
  )
}

export default App
  