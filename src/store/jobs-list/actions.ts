import { createAction } from '@reduxjs/toolkit'
import { TJob } from '../../common/models/job'

export const getJobsList = createAction<TGetJobsPayload>('GET_JOBS_LIST')
export const setJobsList = createAction<TJob[]>('SET_JOBS_LIST')
export const setJobsCount = createAction<number>('SET_JOBS_COUNT')
export const setCurrentPage = createAction<number>('SET_CURRENT_PAGE')
export const setPageLimit = createAction<number>('SET_PAGE_LIMIT')
export const setSearchDescriptionParam = createAction<string>('SET_SEARCH_DESCRIPTION_PARAM')
export const setSearchLocationParam = createAction<string>('SET_SEARCH_LOCATION_PARAM')
export const setSearchTypeParam = createAction<string>('SET_SEARCH_TYPE_PARAM')
export const setJobListLoading = createAction<boolean>('SET_JOBS_LIST_LOADING')
export const setJobListError = createAction<string>('SET_JOBS_LIST_ERROR')

export type TGetJobsPayload = {
    description:string
    type:string
    location:string
    page:number
    limit:number
}
