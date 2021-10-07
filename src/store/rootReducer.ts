import { combineReducers } from '@reduxjs/toolkit'
import { jobDescriptionReducer } from './job-description/reducer'

import { jobsListReducer } from './jobs-list/reducer'

export const rootReducer = combineReducers({
  jobsList: jobsListReducer,
  jobDetails: jobDescriptionReducer
})

export type RootState = ReturnType<typeof rootReducer>
