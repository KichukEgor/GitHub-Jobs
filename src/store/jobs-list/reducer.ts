import { createReducer } from '@reduxjs/toolkit'

import {
  getJobsList,
  setCurrentPage,
  setJobListError,
  setJobsCount,
  setJobsList, setPageLimit,
  setSearchDescriptionParam,
  setSearchLocationParam,
  setSearchTypeParam
} from './actions'

import { TJob } from '../../common/models/job'

export type TStateJobsListReducer = {
    jobsList: null | TJob[],
    totalJobsCount: number,
    pageLimit: number,
    currentPage: number,
    description: string,
    location: string,
    type: string,
    error: string
}

const initialState: TStateJobsListReducer = {
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
    .addCase(getJobsList, (state, { payload }) => {
      state.error = ''
    })
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
      state.currentPage = 1
    })
    .addCase(setSearchLocationParam, (state, { payload }) => {
      state.location = payload
      console.log('payloadpayloadpayloadpayloadpayload', payload)
      state.currentPage = 1
    })
    .addCase(setSearchTypeParam, (state, { payload }) => {
      state.type = payload
      state.currentPage = 1
    })
    .addCase(setPageLimit, (state, { payload }) => {
      state.pageLimit = payload
    })
    .addCase(setJobListError, (state, { payload }) => {
      state.error = payload
    })
})
