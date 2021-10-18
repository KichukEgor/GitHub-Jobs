import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchTypeParam } from '../../store/jobs-list/actions'

const CheckJobTypeEmployees = () => {
  const dispatch = useDispatch()
  const [jobType, setJobsType] = useState<boolean>(false)
  useEffect(() => {
    if (jobType) {
      dispatch(setSearchTypeParam('Full Time'))
    } else {
      dispatch(setSearchTypeParam(''))
    }
  }, [dispatch, jobType])
  return (
    <label htmlFor="checkTime">
      <input
        type="checkbox"
        name="Full Time"
        id="checkTime"
        value="Full Time"
        onClick={() => setJobsType(!jobType)}
      />
      Full Time
    </label>
  )
}

export default CheckJobTypeEmployees
