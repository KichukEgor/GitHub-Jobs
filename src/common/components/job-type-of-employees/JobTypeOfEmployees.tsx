import './JobTypeOfEmployees.scss'

const mainCssClass = 'job-type'

const JobTypeOfEmployees = ({ type }: { type: string | undefined }) => (
  <span className={mainCssClass}>{type}</span>
)

export default JobTypeOfEmployees
