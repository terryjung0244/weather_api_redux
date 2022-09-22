import { takeLatest, put, select } from 'redux-saga/effects';
import { WEATHER_CONST_STRING } from '../services/const/actionConst';
import { getWeahterByCurrentLocationSuccess, getWeahterByCurrentLocationFailure, getWeatherByCitySuccess, getWeatherByCityFailure } from './weatherAction'; 

const { GET_WEATHER_BY_CURRENT_LOCATION_REQUEST, GET_WEAHTER_BY_CITY_REQUEST } = WEATHER_CONST_STRING 

function* getWeatherByPositionRequest (action) {
  
  const { weatherReducer } = yield select();
  const lat = weatherReducer.weatherData.position.lat;
  const lon = weatherReducer.weatherData.position.lon;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  let response = yield fetch(url)
  let data = yield response.json();
  if(data) {
    yield put(getWeahterByCurrentLocationSuccess(data))
  } else {
    yield put(getWeahterByCurrentLocationFailure('Failed'))
  }
}

function* getWeatherByCityRequest (action) {
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  let response = yield fetch(url);
  let data = yield response.json();
  if(data) {
    yield put(getWeatherByCitySuccess(data)) 
  } else {
    yield put(getWeatherByCityFailure('Failed'))
  }

}

export function* weatherSagaWatcher () {
  yield takeLatest(GET_WEATHER_BY_CURRENT_LOCATION_REQUEST, getWeatherByPositionRequest);
  yield takeLatest(GET_WEAHTER_BY_CITY_REQUEST, getWeatherByCityRequest);
}