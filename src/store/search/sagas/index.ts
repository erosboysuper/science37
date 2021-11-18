import { all } from 'redux-saga/effects'
import { searchInFlow } from './search'

export function* searchSaga() {
  yield all([searchInFlow()])
}
