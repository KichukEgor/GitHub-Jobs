import { createReducer } from '@reduxjs/toolkit'

import { setJobsList } from './actions'

import { TJob } from '../../core/models/job'

type TState = {
  jobsList: TJob[] | null
}

const initialState: TState = {
  jobsList: null
}

export const jobsListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobsList, (state, { payload }) => {
      state.jobsList = payload
    })
    .addDefaultCase((state, action) => {})
})
