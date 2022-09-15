import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const {
  GET_WEATHER_BY_CURRENT_LOCATION_FAILURE,
  GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS,
  GET_WEATHER_BY_CURRENT_LOCATION_REQUEST,
  SET_POSITION
} = WEATHER_CONST_STRING


const initialState = {
  weatherData: {
    data: null,
    loading: false,
    error: null,
    position: null,
  },
}

export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER_BY_CURRENT_LOCATION_REQUEST:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          loading: true,
        }
      }
    case GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          data: action.payload,
          loading: false
        }
      }

    case GET_WEATHER_BY_CURRENT_LOCATION_FAILURE:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          error: action.payload,
          loading: false
        }
      }

    case SET_POSITION:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          position: action.payload
        }
      }
    default:
      return state;
  }
}