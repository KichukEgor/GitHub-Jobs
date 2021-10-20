import { createReducer } from '@reduxjs/toolkit'

import {
  setCurrentPage,
  setJobListError,
  setJobsCount,
  setJobsList,
  setSearchDescriptionParam,
  setSearchLocationParam,
  setSearchTypeParam
} from './actions'

import { TJob } from '../../common/models/job'

type TState = {
    jobsList: null | TJob[],
    totalJobsCount: number,
    pageLimit: number,
    currentPage: number,
    description: string,
    location: string,
    type: string,
    error: string
}

const initialState: TState = {
  jobsList: null,
  totalJobsCount: 0,
  pageLimit: 5,
  currentPage: 1,
  description: '',
  location: '',
  type: '',
  error: ''
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
    .addCase(setSearchDescriptionParam, (state, { payload }) => {
      state.description = payload
      state.error = ''
    })
    .addCase(setSearchLocationParam, (state, { payload }) => {
      state.location = payload
      state.currentPage = 1
    })
    .addCase(setSearchTypeParam, (state, { payload }) => {
      state.type = payload
      state.currentPage = 1
    })
    .addCase(setJobListError, (state, { payload }) => {
      state.error = payload
    })
})
