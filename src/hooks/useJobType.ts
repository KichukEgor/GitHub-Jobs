import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setSearchTypeParam } from '../store/jobs-list/actions'

const UseJobType = (jobType: boolean) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (jobType) {
      dispatch(setSearchTypeParam('Full Time'))
    } else {
      dispatch(setSearchTypeParam(''))
    }
  }, [dispatch, jobType])
}

export default UseJobType
