import { useHistory } from 'react-router-dom'

import './BackButton.scss'

const mainClassCss = 'back-button'

const BackButton = () => {
  const history = useHistory()
  const handleBack = () => history.goBack()
  return (
    <button
      type="button"
      className={mainClassCss}
      onClick={handleBack}
    >
      <i className={`fas fa-long-arrow-alt-left ${mainClassCss}__arrow`} />
      Back to search
    </button>
  )
}

export default BackButton
