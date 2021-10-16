import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getJobDescription } from '../store/job-description/actions'

type TUrlParams = {
    id: string
}

const UseJobDescription = () => {
  const dispatch = useDispatch()
  const { id }: TUrlParams = useParams()
  useEffect(() => {
    dispatch(getJobDescription(id))
  }, [dispatch, id])
}

export default UseJobDescription
