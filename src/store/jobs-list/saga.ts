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
  console.log('payloadSAGA_JOB_LIST', payload)
  try {
    const { jobs, jobsCount }: TDataPayload = yield fetchJobsList(payload)
    console.log('payloadSAGA_JOBS FROM SERVER', jobs)
    yield put(setJobsList(jobs))
    yield put(setJobsCount(jobsCount))
  } catch (error) {
    /* TODO тип error */
    // @ts-ignore
    yield put(setError(error.response.data))
    console.error('error OBJECT IN SAGA', error)
  }
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
