import { createReducer } from '@reduxjs/toolkit'

import { setJobsCount, setJobsList } from './actions'

import { TJob } from '../../common/models/job'

type TState = {
  jobsList: null | TJob[],
  totalJobsCount: null | number,
  pageSize: number
}

const initialState: TState = {
  jobsList: null,
  totalJobsCount: null,
  pageSize: 5
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
    })
    .addCase(setJobsCount, (state, { payload }) => {
      state.totalJobsCount = payload
    })
})
