import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../core/models/job'

export const getJobsList = createAction('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
