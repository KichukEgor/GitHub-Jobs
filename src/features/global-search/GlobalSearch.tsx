import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchDescriptionParam } from '../../store/jobs-list/actions'

import './GlobalSearch.scss'
import { RootState } from '../../store/rootReducer'

const mainCssClass = 'global-search'

const GlobalSearch: FC = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const { pageLimit } = useSelector((state: RootState) => state.jobsList)
  const getInfo = () => dispatch(setSearchDescriptionParam(searchValue))

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
