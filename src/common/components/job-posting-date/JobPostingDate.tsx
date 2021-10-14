import { formatDistance } from 'date-fns'
import { TJob } from '../../models/job'

import './JobPostingDate.scss'

const mainCssClass = 'job-posting-date'

const JobPostingDate = ({ created_at }: TJob) => {
  // todo вынести в утилиты. Вынес, но выглядит стремно
  let postingDate = ''
  if (typeof created_at === 'string') {
    postingDate = formatDistance(Date.parse(created_at), new Date(), { addSuffix: true })
  }
  return (
    <span className={`${mainCssClass}`}>
      <i className={`far fa-clock ${mainCssClass}__icon`} />
      <span className={`${mainCssClass}__title`}>{postingDate}</span>
    </span>
  )
}

export default JobPostingDate
