import { FC } from 'react'

import { Link } from 'react-router-dom'
import JobTypeOfEmployees from '../../common/components/job-type-of-employees/JobTypeOfEmployees'
import JobLocation from '../../common/components/job-location/jobLocation'

import JobPostingDate from '../../common/components/job-posting-date/JobPostingDate'

import { TJob } from '../../common/models/job'

import './JobCard.scss'

type TProps = {
  job: TJob
}

const mainCssClass = 'job-card'

const JobCard:FC< TProps> = ({
  job: {
    id, company, title, type, location, company_logo, created_at
  }
}) => (
  <Link key={id} to={`/${id}`}>
    <li className={mainCssClass}>
      <img
        className={`${mainCssClass}__logo`}
        src={company_logo}
        alt={title}
      />
      <div className={`${mainCssClass}__info`}>
        <h3 className={`${mainCssClass}__company`}>{company}</h3>
        <h2 className={`${mainCssClass}__title`}>{title}</h2>
        <div className={`${mainCssClass}__sub-info`}>
          <JobTypeOfEmployees type={type} />
          <p>
            <JobLocation location={location} />
            <JobPostingDate createdAt={created_at} />
          </p>
        </div>
      </div>
    </li>
  </Link>
)

export default JobCard
