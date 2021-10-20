import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { getJobDescription, setJobDescription, setJobDescriptionError } from './actions'
import { fetchJobDescription } from '../../api/api'

import { TJob } from '../../common/models/job'

function* getJobsDescriptionSaga({ payload }: PayloadAction<string>) {
  try {
    const data: TJob = yield fetchJobDescription(payload)
    yield put(setJobDescription(data))
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(setJobDescriptionError(error.message))
    }
    yield put(setJobDescriptionError('Unknown Error'))
  }
}

function* jobDescriptionSaga() {
  yield takeEvery(getJobDescription, getJobsDescriptionSaga)
}

export default jobDescriptionSaga
