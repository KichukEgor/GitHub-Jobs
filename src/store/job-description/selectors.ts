import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectState = ({ jobDetails }: RootState) => jobDetails

export const selectJobDetails = createSelector(
  selectState,
  ({ job }) => job
)
