import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'
import { TGetJobsPayload } from '../../common/models/getJobsPayload'

export const getJobsList = createAction<TGetJobsPayload>('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
export const setJobsCount = createAction<number>('SET_JOBS_COUNT')
export const setCurrentPage = createAction<number>('SET_CURRENT_PAGE')
export const setSearchDescriptionParam = createAction<string>('SET_SEARCH_DESCRIPTION_PARAM')
export const setSearchLocationParam = createAction<string>('SET_SEARCH_LOCATION_PARAM')
export const setSearchTypeParam = createAction<string>('SET_SEARCH_TYPE_PARAM')
export const setJobListError = createAction<string>('SET_JOBS_LIST_ERROR')
