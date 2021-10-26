import { useSelector } from 'react-redux'

import { JobLocation, JobPostingDate, JobTypeOfEmployees } from '../index'
import ErrorMessage from '../../common/components/error-message/ErrorMessage'

import { selectJobDetails } from '../../store/job-description/selectors'

import UseJobDescription from '../../hooks/useJobDescription'

import './DescriptionPageContent.scss'

const mainCssClass = 'description-page-content'

const DescriptionPageContent = () => {
  UseJobDescription()
  const job = useSelector(selectJobDetails)

  return (job ? (
    <section className={mainCssClass}>
      <div>
        <h1 className={`${mainCssClass}__title`}>{job.title}</h1>
        <JobTypeOfEmployees type={job?.type} />
      </div>
      <JobPostingDate createdAt={job.created_at} />
      <JobLocation location={job.location} />
    </section>
  )
    : <ErrorMessage />)
}

export default DescriptionPageContent
