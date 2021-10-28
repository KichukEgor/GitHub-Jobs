import JobLocation from '../job-location/jobLocation'

import './ShortJobCard.scss'

type TProps = {
    companyLogo: string
    company: string
    location: string
}

const mainCssClass = 'short-job-card'

const ShortJobCard = ({ companyLogo, company, location } : TProps) => (
  <div className={mainCssClass}>
    <img className={`${mainCssClass}__icon`} src={companyLogo} alt={company} />
    <div>
      <h2 className={`${mainCssClass}__title`}>{company}</h2>
      <JobLocation location={location} />
    </div>
  </div>
)

export default ShortJobCard
