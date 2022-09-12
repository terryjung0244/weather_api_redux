import { takeLatest, put, select } from 'redux-saga/effects';
import { WEATHER_CONST_STRING } from '../services/const/actionConst';

const { GET_WEATHER_BY_CURRENT_LOCATION_REQUEST } = WEATHER_CONST_STRING

function* weatherRequestFunc(action) {
  console.log(action.payload);
  console.log("hello");
}

export function* weatherSagaWatcher () {
  yield takeLatest(GET_WEATHER_BY_CURRENT_LOCATION_REQUEST, weatherRequestFunc);
}