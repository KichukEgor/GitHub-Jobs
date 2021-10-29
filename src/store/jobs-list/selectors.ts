import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

const selectState = ({ jobsList }: RootState) => jobsList

export const selectJobsListParameters = createSelector(
  selectState,
  ({
    limit,
    page,
    description,
    type,
    location
  }) => ({
    limit,
    page,
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
    limit,
    page
  }) => ({
    jobsList,
    totalJobsCount,
    limit,
    page
  })
)

export const selectError = createSelector(
  selectState,
  ({ error }) => error
)

export const selectPageLimit = createSelector(
  selectState,
  ({ limit }) => limit
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
