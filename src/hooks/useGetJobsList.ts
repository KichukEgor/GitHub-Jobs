import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsList } from '../store/jobs-list/actions'
import { selectJobsListParameters } from '../store/jobs-list/selectors'

const useGetJobsList = () => {
  const {
    description, limit, location, page, type
  } = useSelector(selectJobsListParameters)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({
      description,
      limit,
      location,
      page,
      type
    }))
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
