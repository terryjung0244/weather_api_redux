import React, { useEffect, useState } from 'react';

const App = () => {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('currentLocation', lat, lon);
      getWeahterByCurrentLocation(lat, lon);
    });

    const getWeahterByCurrentLocation = async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=4b917ff881afce42f8453ca1be779805`
      let response = await fetch(url)
      let data = await response.json();
      console.log('data', data)
    }
    
  };

  useEffect(() => {
    getCurrentLocation()  
  }, [])

  return (
    <div>
      App
    </div>
  )
}

export default App
  