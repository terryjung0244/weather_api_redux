import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {

  return (
    <div>
      <div>
        {cities.map((item, index) => {
          return (
            <Button variant="warning" key={item} onClick={() => setCity(item)}>{item}</Button> //item을 적으면, key={}값은 적지 않아도 되는건가?...
          )
        })}
      </div>
    </div>
  )
}

export default WeatherButton
