import { createReducer } from '@reduxjs/toolkit'

import { setJobsList } from './actions'

import { TJob } from '../../core/models/job'

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
    .addDefaultCase((state, action) => {})
})
