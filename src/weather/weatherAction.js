import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const {
  GET_WEATHER_BY_CURRENT_LOCATION_FAILURE,
  GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS,
  GET_WEATHER_BY_CURRENT_LOCATION_REQUEST
} = WEATHER_CONST_STRING

export const getWeahterByCurrentLocationRequest = (latlng) => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_REQUEST, payload: latlng
});

export const getWeahterByCurrentLocationSuccess = () => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS, payload: ''
});

export const getWeahterByCurrentLocationFailure = () => ({
  type: GET_WEATHER_BY_CURRENT_LOCATION_FAILURE, payload: ''
});
