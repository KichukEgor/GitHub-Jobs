import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchTypeParam } from '../../store/jobs-list/actions'

import './check-job-type-employees.scss'

const mainCssClass = 'check-job-type'

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
    <label className={mainCssClass} htmlFor="checkTime">
      <input
        className={`${mainCssClass}__input`}
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
