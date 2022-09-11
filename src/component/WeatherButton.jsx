import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">Pyungyang</Button>
      <Button variant="warning">Seoul</Button>
      <Button variant="warning">New deli</Button>
    </div>
  )
}

export default WeatherButton
