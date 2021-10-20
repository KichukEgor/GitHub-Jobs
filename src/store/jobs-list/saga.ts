import { put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse } from 'axios'
import {
  getJobsList, setJobListError, setJobsCount, setJobsList
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
    // TODO put -> put resolve
    yield put(setJobsList(jobs))
    yield put(setJobsCount(jobsCount))
  } catch (error) {
    // TODO в одну строку или в две?
    if (axios.isAxiosError(error) && error.code === '404') yield put(setJobListError('Error type 404'))
    yield put(setJobListError('Unknown Error'))
  }
}

function* jobsListSaga() {
  yield takeLatest(getJobsList, getJobsListSaga)
}

export default jobsListSaga
