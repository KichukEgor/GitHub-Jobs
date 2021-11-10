import { createReducer } from '@reduxjs/toolkit'

import {
  getJobsList,
  setCurrentPage,
  setJobListError, setJobListLoading,
  setJobsCount,
  setJobsList, setNewJob, setPageLimit,
  setSearchDescriptionParam,
  setSearchLocationParam,
  setSearchTypeParam
} from './actions'

import { TJob } from '../../common/models/job'

export type TStateJobsListReducer = {
    jobsList: null | TJob[],
    totalJobsCount: number,
    limit: number,
    page: number,
    description: string,
    location: string,
    type: string,
    isLoading: boolean
    error: string
}

const initialState: TStateJobsListReducer = {
  jobsList: null,
  totalJobsCount: 0,
  limit: 5,
  page: 1,
  description: '',
  location: '',
  type: '',
  isLoading: true,
  error: ''
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getJobsList, (state) => {
      state.error = ''
      state.isLoading = true
    })
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
    })
    .addCase(setJobsCount, (state, { payload }) => {
      state.totalJobsCount = payload
    })
    .addCase(setCurrentPage, (state, { payload }) => {
      state.page = payload
    })
    .addCase(setSearchDescriptionParam, (state, { payload }) => {
      state.description = payload
      state.page = 1
    })
    .addCase(setSearchLocationParam, (state, { payload }) => {
      state.location = payload
      state.page = 1
    })
    .addCase(setSearchTypeParam, (state, { payload }) => {
      state.type = payload
      state.page = 1
    })
    .addCase(setPageLimit, (state, { payload }) => {
      state.limit = payload
    })
    .addCase(setJobListLoading, (state, { payload }) => {
      state.isLoading = payload
    })
    .addCase(setJobListError, (state, { payload }) => {
      state.error = payload
    })
})
