import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PaginationMenu from '../../common/components/pagination-menu/PaginationMenu'
import JobCard from '../job-card/JobCard'
import CreateJobButton from '../create-job-button/CreateJobButton'
import ModalJobForm from '../modal-job-form/ModalJobForm'
import Portal from '../../common/components/portal/Portal'

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

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(true)
    // @ts-ignore
  }

  return (
    <section>
      <CreateJobButton onClick={handleOpen} />
      {isOpen
        ? (
          <Portal className="job-form">
            <ModalJobForm modalVisibility={() => setIsOpen(false)} />
          </Portal>
        )
        : null}
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
