import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsList } from '../store/jobs-list/actions'
import { selectJobsListParameters } from '../store/jobs-list/selectors'

const useGetJobsList = () => {
  const searchParams = useSelector(selectJobsListParameters)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({
      /* TODO разные названия полей */
      description: searchParams.description,
      limit: searchParams.pageLimit,
      location: searchParams.location,
      page: searchParams.currentPage,
      type: searchParams.type
    }))
  }, [
    dispatch,
    searchParams.description,
    searchParams.pageLimit,
    searchParams.location,
    searchParams.currentPage,
    searchParams.type
  ])
}

export default useGetJobsList
