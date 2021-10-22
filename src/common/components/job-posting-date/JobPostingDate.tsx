import getPastPeriod from './utils'
import { TJob } from '../../models/job'

import './JobPostingDate.scss'

const mainCssClass = 'job-posting-date'

// TODO спросить, стоит ли делать такого вида типизацию, или лучше использовать :string

const JobPostingDate = ({ created_at }: TJob) => {
  let postingDate
  if (typeof created_at === 'string') {
    postingDate = getPastPeriod(created_at)
  }
  return (
    <span className={`${mainCssClass}`}>
      <i className={`far fa-clock ${mainCssClass}__icon`} />
      <span className={`${mainCssClass}__title`}>{postingDate}</span>
    </span>
  )
}

export default JobPostingDate
