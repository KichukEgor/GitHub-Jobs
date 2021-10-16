import { createReducer } from '@reduxjs/toolkit'

import {
  setCurrentPage, setJobsCount, setJobsList, setSearchDescriptionParam, setSearchLocationParam, setSearchTypeParam
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
    })
    .addCase(setSearchLocationParam, (state, { payload }) => {
      state.location = payload
    })
    .addCase(setSearchTypeParam, (state, { payload }) => {
      state.type = payload
    })
})
