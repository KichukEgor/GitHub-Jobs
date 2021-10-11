import { Link, useHistory } from 'react-router-dom'

const BackLink = () => {
  const history = useHistory()
  const handleBack = () => history.goBack()
  return (
    <Link to="/" onClick={handleBack}>
      <i className="fas fa-long-arrow-alt-left" />
    </Link>
  )
}

export default BackLink
