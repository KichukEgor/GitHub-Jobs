import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { api } from '../../../core/api/api'

import { setJobsList } from '../../../store/jobs-list/actions'

import './GlobalSearch.scss'

const mainCssClass = 'global-search'

const GlobalSearch: FC = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const getInfo = async () => {
    const { data: { jobs } } = await api.get(`/jobs?description=${searchValue}`)
    dispatch(setJobsList(jobs))
  }
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
