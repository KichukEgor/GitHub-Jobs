import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getJobsList } from '../../store/jobs-list/actions'
import { RootState } from '../../store/rootReducer'

import JobLocation from '../../common/components/job-location/jobLocation'
import JobPostingDate from '../../common/components/job-posting-date/JobPostingDate'
import JobTypeOfEmployees from '../../common/components/job-type-of-employees/JobTypeOfEmployees'

import PageSwitcher from '../page-switcher/PageSwitcher'

import './JobsList.scss'

const mainCssClass = 'jobs-list'

const JobsList = () => {
  const {
    jobsList, totalJobsCount, pageLimit, currentPage, description: searchdescr
  } = useSelector((state: RootState) => state.jobsList)
  const isPageOne = pageLimit >= totalJobsCount
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList({ page: currentPage, limit: pageLimit, description: searchdescr }))
  }, [searchdescr, currentPage, pageLimit, dispatch])

  return (
    <section>
      <ul className={mainCssClass}>
        {
          jobsList?.map(
            ({
              id, type, created_at: createdAt, company, location, title, company_logo: companyLogo
            }) => (
              <Link key={id} to={`/${id}`}>
                <li className={`${mainCssClass}__item`}>
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
      {
        !isPageOne && <PageSwitcher lobsCount={totalJobsCount} pageLimit={pageLimit} currentPage={currentPage} />
      }
    </section>
  )
}

export default JobsList
