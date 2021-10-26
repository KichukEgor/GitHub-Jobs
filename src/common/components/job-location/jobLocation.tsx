import './jobLocation.scss'

const mainCssClass = 'job-location'

const JobLocation = ({ location }: { location: string }) => (
  <span className={mainCssClass}>
    <i className={`fas fa-globe-americas ${mainCssClass}__icon`} />
    <span className={`${mainCssClass}__title`}>{location}</span>
  </span>
)

export default JobLocation
