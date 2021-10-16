import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getJobsList } from '../store/jobs-list/actions'
import { RootState } from '../store/rootReducer'

const useOnInitHomePage = () => {
  const {
    pageLimit, currentPage, error
  } = useSelector((state: RootState) => state.jobsList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({ page: currentPage, limit: pageLimit }))
  }, [currentPage, pageLimit, dispatch])
  return error
}

export default useOnInitHomePage
