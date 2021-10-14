import { createReducer } from '@reduxjs/toolkit'

import {
  setCurrentPage, setCurrentQueryParams, setJobsCount, setJobsList
} from './actions'

import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

type TState = {
  jobsList: null | TJob[],
  totalJobsCount: number,
  pageSize: number,
  currentPage: number,
  currentQueryParams: TQueryParams
}

const initialState: TState = {
  jobsList: null,
  totalJobsCount: 0,
  pageSize: 5,
  currentPage: 1,
  currentQueryParams: {
    description: '',
    location: '',
    type: '',
    page: 1,
    limit: 5
  }
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
    })
    .addCase(setJobsCount, (state, { payload }) => {
      state.totalJobsCount = payload
    })
    .addCase(setCurrentQueryParams, (state, { payload }) => {
      if (payload?.description) {
        state.currentQueryParams.description = payload?.description
      }
      if (payload?.location) {
        state.currentQueryParams.location = payload?.location
      }
      if (payload?.location) {
        state.currentQueryParams.location = payload?.location
      }
      if (payload?.type) {
        state.currentQueryParams.type = payload?.type
      }
      if (payload?.page) {
        state.currentQueryParams.page = payload?.page
      }
      if (payload?.limit) {
        state.currentQueryParams.limit = payload?.limit
      }
    })
})
