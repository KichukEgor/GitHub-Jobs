import { put, takeEvery } from 'redux-saga/effects'
import { getJobsList, setJobsList } from './actions'

import { fetchJobsList } from './api'

import { TJob } from '../../core/models/job'

function* getJobsListSaga() {
  const jobsList: TJob[] = yield fetchJobsList()

  yield put(setJobsList(jobsList))
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
