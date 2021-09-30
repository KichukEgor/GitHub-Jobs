import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { getJobsList, setJobsList } from './actions'

import { fetchJobsList } from './api'
import { TJob } from '../../core/models/job'
import { TQueryParams } from '../../core/models/queryParams'

function* getJobsListSaga({ payload }: PayloadAction<TQueryParams>) {
  try {
    const jobsList: TJob[] = yield fetchJobsList(payload)
    yield put(setJobsList(jobsList))
  } catch (error) {
    console.error(error)
  }
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
