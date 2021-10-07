import { all, fork } from 'redux-saga/effects'
import jobDescriptionSaga from './job-description/saga'
import jobsListSaga from './jobs-list/saga'

export function* rootSaga() {
  yield all([fork(jobsListSaga), fork(jobDescriptionSaga)])
}
