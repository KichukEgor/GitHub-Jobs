import { createReducer } from '@reduxjs/toolkit'

import { filteredJobsList, setJobsList } from './actions'

import { TJob } from '../../core/models/job'

type TState = {
  jobsList: TJob[] | null;
  filteredJobsList: TJob[];
  searchValue: string;
}

const initialState: TState = {
  jobsList: null,
  filteredJobsList: [],
  searchValue: ''
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
      state.filteredJobsList = payload
    })
    .addCase(filteredJobsList, (state, payload) => {
      // @ts-ignore
      state.filteredJobsList.filter((item) => item.company === payload)
    })
    .addDefaultCase((state, action) => {})
})
