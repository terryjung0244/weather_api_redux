import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const {
  GET_WEATHER_BY_CURRENT_LOCATION_FAILURE,
  GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS,
  GET_WEATHER_BY_CURRENT_LOCATION_REQUEST,
  SET_POSITION,
  GET_WEAHTER_BY_CITY_REQUEST,
  GET_WEAHTER_BY_CITY_SUCCESS,
  GET_WEAHTER_BY_CITY_FAILURE
} = WEATHER_CONST_STRING

export const getWeahterByCurrentLocationRequest = () => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_REQUEST
});

export const getWeahterByCurrentLocationSuccess = (apiSuccess) => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS, payload: apiSuccess
});

export const getWeahterByCurrentLocationFailure = (apiFailure) => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_FAILURE, payload: apiFailure
});

export const setPosition = (latlng) => ({
  type: SET_POSITION, payload: latlng
});

export const getWeatherByCityRequest = (country) => ({
  type: GET_WEAHTER_BY_CITY_REQUEST, payload: country
})

export const getWeatherByCitySuccess = (apiSuccess) => ({
  type: GET_WEAHTER_BY_CITY_SUCCESS, payload: apiSuccess
})

export const getWeatherByCityFailure = (apiFailure) => ({
  type: GET_WEAHTER_BY_CITY_FAILURE, payload: apiFailure
})



