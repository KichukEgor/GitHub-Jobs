import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

const selectState = ({ jobsList }: RootState) => jobsList

export const selectJobsListParameters = createSelector(
  selectState,
  ({
    pageLimit,
    currentPage,
    description,
    type,
    location
  }) => ({
    pageLimit,
    currentPage,
    description,
    type,
    location
  })
)

export const selectJobsListComponentParameters = createSelector(
  selectState,
  ({
    jobsList,
    totalJobsCount,
    pageLimit,
    currentPage
  }) => ({
    jobsList,
    totalJobsCount,
    pageLimit,
    currentPage
  })
)

export const selectError = createSelector(
  selectState,
  ({ error }) => error
)

export const selectPageLimit = createSelector(
  selectState,
  ({ pageLimit }) => pageLimit
)

export const selectIsLoading = createSelector(
  selectState,
  ({ isLoading }) => isLoading
)

export const selectLocation = createSelector(
  selectState,
  ({ location }) => location
)

export const selectType = createSelector(
  selectState,
  ({ type }) => type
)
