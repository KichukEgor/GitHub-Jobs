import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setSearchTypeParam } from '../store/jobs-list/actions'

const useJobType = (jobType: boolean) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSearchTypeParam(jobType ? 'Full Time' : ''))
  }, [dispatch, jobType])
}

export default useJobType
