import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getJobsList } from '../../../store/jobs-list/actions'
import { RootState } from '../../../store/rootReducer'

import './JobsList.scss'

const mainCssClass = 'jobs-list'

const JobsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobsList())
  }, [dispatch])

  const { jobsList } = useSelector((state: RootState) => state.jobsList)
  const jobsShortDescribe = jobsList?.map(
    ({
      id, type, created_at: createdAt, company, location, title, company_logo: companyLogo
    }) => (
      <Link key={id} to={`/jobs/${id}`}>
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
              <p className={`${mainCssClass}__type`}>{type}</p>
              <p>
                <span className={`${mainCssClass}__location`}>{location}</span>
                <span className={`${mainCssClass}__created-at`}>
                  {createdAt}
                </span>
              </p>
            </div>
          </div>
        </li>
      </Link>
    )
  )

  return (
    <section className={`${mainCssClass}-container`}>
      <ul>{JobsList !== null ? jobsShortDescribe : <span>ERROR!</span>}</ul>
    </section>
  )
}

export default JobsList
