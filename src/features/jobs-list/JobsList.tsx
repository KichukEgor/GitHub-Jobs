import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getJobsList } from '../../store/jobs-list/actions'
import { RootState } from '../../store/rootReducer'

/* TODO импорт из одного файла */
import JobLocation from '../job-location/jobLocation'
import JobPostingDate from '../job-posting-date/JobPostingDate'
import JobTypeOfEmployees from '../job-type-of-employees/JobTypeOfEmployees'

import './JobsList.scss'

const mainCssClass = 'jobs-list'

const JobsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList())
  }, [dispatch])

  const { jobsList } = useSelector((state: RootState) => state.jobsList)

  return (
    <ul>
      {
        jobsList?.map(
          ({
            id, type, created_at: createdAt, company, location, title, company_logo: companyLogo
          }) => (
            <Link key={id} to={`/${id}`}>
              <li className={`${mainCssClass}`}>
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
                      <JobPostingDate created_at={createdAt} />
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          )
        )
      }
    </ul>
  )
}

export default JobsList
