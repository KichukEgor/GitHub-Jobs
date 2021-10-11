import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

export const getJobsList = createAction<TQueryParams | undefined>('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
export const setJobsCount = createAction<number>('SET_JOBS_COUNT')
export const setCurrentPage = createAction<number>('SET_CURRENT_PAGE')
