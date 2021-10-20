import './ErrorMessage.scss'

const mainCssClass = 'error-message'

const ErrorMessage = () => (
  <section className={mainCssClass}>
    <i className={`fas fa-exclamation-circle ${mainCssClass}__icon`} />
    <h1 className={`${mainCssClass}__title`}> Oops! </h1>
    <p className={`${mainCssClass}__text`}>No jobs found with the specified parameters</p>
    <p className={`${mainCssClass}__text`}>Please change your search parameters</p>
  </section>
)

export default ErrorMessage
