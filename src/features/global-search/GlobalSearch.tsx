import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import SearchInput from '../../common/components/search-input/SearchInput'

import { setSearchDescriptionParam } from '../../store/jobs-list/actions'

import './GlobalSearch.scss'

const mainCssClass = 'global-search'

const GlobalSearch: FC = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const getInfo = () => dispatch(setSearchDescriptionParam(searchValue))

  return (
    <form action="" className={mainCssClass}>
      <SearchInput
        iconClassName="fas fa-suitcase"
        inputClassName={`${mainCssClass}__input`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Title, companies, expertise or benefits"
      />
      <button
        className={`${mainCssClass}__submit`}
        onClick={getInfo}
        type="button"
      >
        Submit
      </button>
    </form>
  )
}

export default GlobalSearch
