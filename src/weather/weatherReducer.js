import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const {
  GET_WEATHER_BY_CURRENT_LOCATION_FAILURE,
  GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS,
  GET_WEATHER_BY_CURRENT_LOCATION_REQUEST
} = WEATHER_CONST_STRING


const initialState = {
  weather: {
    data: null,
    loading: false
  },
}

export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER_BY_CURRENT_LOCATION_REQUEST:
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: true
        }
      }
    default:
      return state;
  }
}