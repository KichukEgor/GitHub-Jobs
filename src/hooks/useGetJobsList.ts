import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsList } from '../store/jobs-list/actions'
import { selectJobsListParameters } from '../store/jobs-list/selectors'

const useGetJobsList = () => {
  const {
    pageLimit,
    currentPage,
    description,
    type,
    location
  } = useSelector(selectJobsListParameters)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({
      page: currentPage,
      limit: pageLimit,
      description,
      type,
      location
    }))
  }, [
    dispatch,
    currentPage,
    pageLimit,
    description,
    type,
    location
  ])
}

export default useGetJobsList
