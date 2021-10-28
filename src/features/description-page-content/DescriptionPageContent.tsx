import { useSelector } from 'react-redux'

import ErrorMessage from '../../common/components/error-message/ErrorMessage'

import { selectJobDetails } from '../../store/job-description/selectors'

import DescriptionPageHeader from '../description-page-header/DescriptionPageHeader'
import ShortJobCard from '../../common/components/short-job-card/ShortJobCard'
import JobDescription from '../../common/components/job-description/JobDescription'

import UseJobDescription from '../../hooks/useJobDescription'

import './DescriptionPageContent.scss'

const mainCssClass = 'description-page-content'

const DescriptionPageContent = () => {
  UseJobDescription()
  const job = useSelector(selectJobDetails)

  return (job ? (
    <section className={mainCssClass}>
      <DescriptionPageHeader createdAt={job.created_at} title={job.title} type={job.type} />
      <ShortJobCard companyLogo={job.company_logo} company={job.company} location={job.location} />
      <JobDescription description={job.description} />
    </section>
  )
    : <ErrorMessage />)
}

export default DescriptionPageContent
