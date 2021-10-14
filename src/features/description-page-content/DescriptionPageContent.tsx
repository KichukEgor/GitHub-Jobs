import { useSelector } from 'react-redux'

import { JobLocation, JobPostingDate, JobTypeOfEmployees } from '../index'

import { RootState } from '../../store/rootReducer'

import UseJobDescription from '../../hooks/useJobDescription'

import './DescriptionPageContent.scss'

const mainCssClass = 'description-page-content'

const DescriptionPageContent = () => {
  UseJobDescription()
  const { job } = useSelector((state: RootState) => state.jobDetails)
  return (
    <section className={mainCssClass}>
      <div>
        <h1 className={`${mainCssClass}__title`}>{job?.title}</h1>
        <JobTypeOfEmployees type={job?.type} />
      </div>
      <JobPostingDate created_at={job?.created_at} />
      <JobLocation location={job?.location} />
    </section>
  )
}

export default DescriptionPageContent
