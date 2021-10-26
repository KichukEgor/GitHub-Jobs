import { Link } from 'react-router-dom'

import JobTypeOfEmployees from '../../common/components/job-type-of-employees/JobTypeOfEmployees'
import JobLocation from '../../common/components/job-location/jobLocation'
import JobPostingDate from '../../common/components/job-posting-date/JobPostingDate'

import './JobCard.scss'

const mainCssClass = 'job-card'

type TProps = {
  id: string
  companyLogo: string
  title: string
  company: string
  type: string
  location: string
  createdAt: string
}

const JobCard = ({
  id, companyLogo, title, company, type, location, createdAt
}: TProps) => (
  <Link key={id} to={`/${id}`}>
    <li className={mainCssClass}>
      <div>
        <img
          className={`${mainCssClass}__logo`}
          src={companyLogo}
          alt={title}
        />
      </div>
      <div className={`${mainCssClass}__info`}>
        <h3 className={`${mainCssClass}__company`}>{company}</h3>
        <h2 className={`${mainCssClass}__title`}>{title}</h2>
        <div className={`${mainCssClass}__sub-info`}>
          <JobTypeOfEmployees type={type} />
          <p>
            <JobLocation location={location} />
            <JobPostingDate createdAt={createdAt} />
          </p>
        </div>
      </div>
    </li>
  </Link>
)

export default JobCard
