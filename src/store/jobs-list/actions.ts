import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'
import { TQueryParams } from '../../common/models/queryParams'

type TGetJobsListPayload = {
  id?:string | number,
  description?:string,
  type?:string,
  location?:string,
  page?: string | number,
  limit?: string | number
}

export const getJobsList = createAction<TGetJobsListPayload | undefined>('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
export const setJobsCount = createAction<number>('SET_JOBS_COUNT')
export const setCurrentPage = createAction<number>('SET_CURRENT_PAGE')
export const setCurrentQueryParams = createAction<TQueryParams | undefined>('SET_CURRENT_QUERY_PARAMS')
