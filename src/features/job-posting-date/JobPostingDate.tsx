import { formatDistance } from 'date-fns'
import { TJob } from '../../common/models/job'

import './JobPostingDate.scss'

const mainCssClass = 'job-posting-date'

const JobPostingDate = ({ created_at: createdAt }: TJob) => {
  let postingDate = null
  if (typeof createdAt === 'string') {
    postingDate = formatDistance(Date.parse(createdAt), new Date(), { addSuffix: true })
  }
  return (
    <span className={`${mainCssClass}`}>
      <i className={`far fa-clock ${mainCssClass}__icon`} />
      <span className={`${mainCssClass}__title`}>{postingDate}</span>
    </span>
  )
}

export default JobPostingDate
