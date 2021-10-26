import { FC } from 'react'

import getPastPeriod from './utils'

import './JobPostingDate.scss'

const mainCssClass = 'job-posting-date'

const JobPostingDate: FC<{ createdAt: string }> = ({ createdAt }) => {
  const postingDate = getPastPeriod(createdAt)

  return (
    <span className={`${mainCssClass}`}>
      <i className={`far fa-clock ${mainCssClass}__icon`} />
      <span className={`${mainCssClass}__title`}>{postingDate}</span>
    </span>
  )
}

export default JobPostingDate
