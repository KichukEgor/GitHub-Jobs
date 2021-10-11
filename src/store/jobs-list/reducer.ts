import { createReducer } from '@reduxjs/toolkit'

import { setCurrentPage, setJobsCount, setJobsList } from './actions'

import { TJob } from '../../common/models/job'

type TState = {
  jobsList: null | TJob[],
  totalJobsCount: number,
  pageSize: number,
  currentPage: number
}

const initialState: TState = {
  jobsList: null,
  totalJobsCount: 0,
  pageSize: 5,
  currentPage: 1
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
    })
    .addCase(setJobsCount, (state, { payload }) => {
      state.totalJobsCount = payload
    })
    .addCase(setCurrentPage, (state, { payload }) => {
      state.currentPage = payload
    })
})
