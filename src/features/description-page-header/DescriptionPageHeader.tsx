import { JobPostingDate, JobTypeOfEmployees } from '../index'

import './DescriptionPageHeader.scss'

type TProps = {
    type: string
    createdAt: string
    title: string
}

const mainCssClass = 'description-page-header'

const DescriptionPageHeader = ({ type, createdAt, title } : TProps) => (
  <section className={mainCssClass}>
    <div>
      <h1 className={`${mainCssClass}__title`}>{title}</h1>
      <JobTypeOfEmployees type={type} />
    </div>
    <JobPostingDate createdAt={createdAt} />
  </section>
)

export default DescriptionPageHeader
