import { put, select, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  getJobsList, setCurrentQueryParams, setJobsCount, setJobsList
} from './actions'

import { fetchJobsList } from '../../services/fetchJobsList'
import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

type TDataPayload = {
  jobs: TJob[]
  jobsCount: number
}

function* getJobsListSaga({ payload }: PayloadAction<TQueryParams>) {
  console.log('SAGA getJobsListSaga', payload)
  // TODO
  // @ts-ignore
  const state = yield select()
  console.log('state', state)
  try {
    yield put(setCurrentQueryParams(payload))
    const { jobs, jobsCount }: TDataPayload = yield fetchJobsList(state.jobsList.currentQueryParams)
    yield put(setJobsList(jobs))
    yield put(setJobsCount(jobsCount))
  } catch (error) {
    console.error(error)
  }
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
