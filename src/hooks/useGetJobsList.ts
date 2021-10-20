import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsList } from '../store/jobs-list/actions'
import { RootState } from '../store/rootReducer'

const useGetJobsList = () => {
  const {
    pageLimit,
    currentPage,
    description: searchedJobDescription,
    type: searchedJobType,
    location: searchedJobLocation
  } = useSelector((state: RootState) => state.jobsList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({
      page: currentPage,
      limit: pageLimit,
      description: searchedJobDescription,
      type: searchedJobType,
      location: searchedJobLocation
    }))
  }, [
    dispatch,
    currentPage,
    pageLimit,
    searchedJobDescription,
    searchedJobType,
    searchedJobLocation
  ])
}

export default useGetJobsList
