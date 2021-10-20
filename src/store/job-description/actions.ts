import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'

export const getJobDescription = createAction<string>('GET_JOB_DESCRIPTION')
export const setJobDescription = createAction<TJob>('SET_JOB_DESCRIPTION')
export const setJobDescriptionError = createAction<string>('SET_JOB_DESCRIPTION_ERROR')
