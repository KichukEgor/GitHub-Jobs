import { TJob } from '../../models/job'

import './JobTypeOfEmployees.scss'

const mainCssClass = 'job-type'

const JobTypeOfEmployees = ({ type }: TJob) => (
  <span className={mainCssClass}>{type}</span>
)

export default JobTypeOfEmployees
