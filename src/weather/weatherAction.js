import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const {
  GET_WEATHER_BY_CURRENT_LOCATION_FAILURE,
  GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS,
  GET_WEATHER_BY_CURRENT_LOCATION_REQUEST,
  SET_POSITION
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