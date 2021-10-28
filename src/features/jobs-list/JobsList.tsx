import { useSelector } from 'react-redux'

import PaginationMenu from '../../common/components/pagination-menu/PaginationMenu'
import JobCard from '../job-card/JobCard'

import { selectJobsListComponentParameters } from '../../store/jobs-list/selectors'

import './JobsList.scss'

const mainCssClass = 'jobs-list'

const JobsList = () => {
  const {
    jobsList,
    totalJobsCount,
    pageLimit,
    currentPage
  } = useSelector(selectJobsListComponentParameters)

  const isPageOnlyOne = pageLimit >= totalJobsCount

  return (
    <section>
      <ul className={mainCssClass}>
        {
          jobsList?.map(
            /* TODO id -> job */
            ({
              id, type, created_at, company, location, title, company_logo
            }) => (
              <JobCard
                key={id}
                id={id}
                companyLogo={company_logo}
                title={title}
                company={company}
                type={type}
                location={location}
                createdAt={created_at}
              />
            )
          )
        }
      </ul>
      {
        !isPageOnlyOne && <PaginationMenu lobsCount={totalJobsCount} pageLimit={pageLimit} currentPage={currentPage} />
      }
    </section>
  )
}

export default JobsList
