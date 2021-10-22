import { useState } from 'react'

import UseJobType from '../../hooks/useJobType'

import './check-job-type-employees.scss'

const mainCssClass = 'check-job-type'

const CheckJobTypeEmployees = () => {
  const [jobType, setJobsType] = useState<boolean>(false)
  UseJobType(jobType)

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
