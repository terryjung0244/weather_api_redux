import { all } from 'redux-saga/effects';
import { weatherSagaWatcher } from '../../weather/weatherSaga';

export default function* rootSaga() {
  yield all([
    weatherSagaWatcher()
  ])
};