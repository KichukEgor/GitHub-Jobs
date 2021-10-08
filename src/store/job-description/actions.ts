import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

export const getJobDescription = createAction<TQueryParams>('GET_JOB_DESCRIPTION')
export const setJobDescription = createAction<TJob>('SET_JOBS_LIST')
