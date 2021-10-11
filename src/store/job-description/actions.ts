import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'

export const getJobDescription = createAction<string>('GET_JOB_DESCRIPTION')
export const setJobDescription = createAction<TJob>('SET_JOBS_LIST')
