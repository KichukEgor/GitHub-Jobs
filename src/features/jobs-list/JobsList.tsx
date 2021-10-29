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
    limit,
    page
  } = useSelector(selectJobsListComponentParameters)

  const isPageOnlyOne = limit >= totalJobsCount

  return (
    <section>
      <ul className={mainCssClass}>
        {
          jobsList?.map(
            (job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            )
          )
        }
      </ul>
      {
        !isPageOnlyOne && <PaginationMenu lobsCount={totalJobsCount} limit={limit} page={page} />
      }
    </section>
  )
}

export default JobsList
