import { useHistory } from 'react-router-dom'

export const useBackHandler = () => {
  const history = useHistory()
  return history.goBack()
}
