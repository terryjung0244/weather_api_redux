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


const initialState = {
  weatherData: {
    data: null,
    loading: false,
    error: null,
    position: null,
    city: '',
    person: {
      name: '',
      age: 10
    }
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

    case GET_WEAHTER_BY_CITY_REQUEST:
      return {
        ...state, 
        weatherData: {
          ...state.weatherData,
          loading: true,
          city: action.payload
        }
      }
      case GET_WEAHTER_BY_CITY_SUCCESS:
        return {
        ...state, 
        weatherData: {
          ...state.weatherData,
          loading: false,
          data: action.payload
        }
      }

      case GET_WEAHTER_BY_CITY_FAILURE:
        return {
          ...state, 
          weatherData: {
            ...state.weatherData,
            loading: false,
            error: action.payload
          }
        }

    default:
      return state;
  }
}