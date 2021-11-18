import { all } from '@redux-saga/core/effects'
import { searchSaga } from './search/sagas'

export default function* rootSaga() {
  yield all([ searchSaga()])
}
