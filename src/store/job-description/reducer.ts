import { createReducer } from '@reduxjs/toolkit'
import { setJobDescription, setJobDescriptionError } from './actions'
import { TJob } from '../../common/models/job'

type TState = {
  job: null | TJob
  error: string
}

const initialState: TState = {
  job: null,
  error: ''
}

export const jobDescriptionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobDescription, (state, { payload }) => {
      state.job = payload
    })
    .addCase(setJobDescriptionError, (state, { payload }) => {
      state.error = payload
    })
})
