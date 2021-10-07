import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { getJobsList, setJobsCount, setJobsList } from './actions'

import { fetchJobsList } from '../../services/fetchJobsList'
import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

type TDataPayload = {
  jobs: TJob[]
  totalCount: number
}

function* getJobsListSaga({ payload }: PayloadAction<TQueryParams>) {
  try {
    const data: TDataPayload = yield fetchJobsList(payload)
    yield put(setJobsList(data.jobs))
    yield put(setJobsCount(data.totalCount))
  } catch (error) {
    console.error(error)
  }
}

function* jobsListSaga() {
  yield takeEvery(getJobsList, getJobsListSaga)
}

export default jobsListSaga
