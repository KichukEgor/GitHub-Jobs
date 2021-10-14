import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getJobsList } from '../../store/jobs-list/actions'

import './GlobalSearch.scss'

const mainCssClass = 'global-search'

const GlobalSearch: FC = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  // TODO page limit должны браться из стора
  const getInfo = () => dispatch(getJobsList({ description: searchValue }))

  return (
    <form action="" className={`${mainCssClass}`}>
      <input
        className={`${mainCssClass}__query`}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Title, companies, expertise or benefits"
      />
      <input
        className={`${mainCssClass}__submit`}
        onClick={getInfo}
        value="Submit"
        type="button"
      />
    </form>
  )
}

export default GlobalSearch
