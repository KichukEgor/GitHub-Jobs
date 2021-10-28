import { AxiosError } from 'axios'
import { putResolve, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import {
  getJobsList, setJobListError, setJobsCount, setJobsList
} from './actions'

import { fetchJobsList } from '../../api/api'

import { HttpStatusCode } from '../../common/enums/httpStatusCode'

import { TJob } from '../../common/models/job'
import { TGetJobsPayload } from '../../common/models/getJobsPayload'

type TDataPayload = {
  jobs: TJob[]
  jobsCount: number
}

function* getJobsListSaga({ payload }: PayloadAction<TGetJobsPayload>) {
  try {
    const { jobs, jobsCount }: TDataPayload = yield fetchJobsList(payload)
    yield putResolve(setJobsList(jobs))
    yield putResolve(setJobsCount(jobsCount))
  } catch (error) {
    if ((error as AxiosError).response?.status === HttpStatusCode.NOT_FOUND) {
      yield putResolve(setJobListError('Error type 404'))
    } else {
      yield putResolve(setJobListError('Unknown Error'))
    }
  }
}

function* jobsListSaga() {
  yield takeLatest(getJobsList, getJobsListSaga)
}

export default jobsListSaga
