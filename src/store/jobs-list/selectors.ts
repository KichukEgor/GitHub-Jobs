import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectState = ({ jobsList }: RootState) => jobsList

export const selectTotalCount = createSelector(
  selectState,
  ({ totalJobsCount }) => totalJobsCount
)
