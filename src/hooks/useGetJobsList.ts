/* eslint-disable */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsList } from '../store/jobs-list/actions'
import { selectJobsListParameters } from '../store/jobs-list/selectors'

const useGetJobsList = () => {
  const searchParams = useSelector(selectJobsListParameters)
  const {
    description, limit, location, page, type
  } = searchParams

  const dispatch = useDispatch()
  useEffect(
      () => {
    dispatch(getJobsList(searchParams))
  }, [
    dispatch,
    description,
    limit,
    location,
    page,
    type
  ])
}

export default useGetJobsList
