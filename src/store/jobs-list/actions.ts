import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../core/models/job'
import { TQueryParams } from '../../core/models/queryParams'

export const getJobsList = createAction<TQueryParams | undefined>('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
