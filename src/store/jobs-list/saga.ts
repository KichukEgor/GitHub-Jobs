import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  getJobsList, setError, setJobsCount, setJobsList
} from './actions'

import { fetchJobsList } from '../../api/api'

import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

type TDataPayload = {
  jobs: TJob[]
  jobsCount: number
}

function* getJobsListSaga({ payload }: PayloadAction<TQueryParams>) {
  try {
    const { jobs, jobsCount }: TDataPayload = yield fetchJobsList(payload)
    yield put(setJobsList(jobs))
    yield put(setJobsCount(jobsCount))
  } catch (error) {
    /* TODO тип error */
    /* yield put(setError(error.body)) */
    console.error(error)
  }
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
