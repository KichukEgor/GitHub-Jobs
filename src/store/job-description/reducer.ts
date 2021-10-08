import { createReducer } from '@reduxjs/toolkit'

import { setJobDescription } from './actions'
import { TJob } from '../../common/models/job'

type TState = {
  job: null | TJob
}

const initialState: TState = {
  job: null
}

export const jobDescriptionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setJobDescription, (state, { payload }) => {
      state.job = payload
    })
})
