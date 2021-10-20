import { FC } from 'react'
import { useSelector } from 'react-redux'
import { JobsList, GlobalSearch } from '../index'

import FilterMenu from '../filter-menu/FilterMenu'
import ErrorMessage from '../../common/components/error-message/ErrorMessage'

import useGetJobsList from '../../hooks/useGetJobsList'

import { RootState } from '../../store/rootReducer'

import './HomePage.scss'

const mainCssClass = 'home-page'
// todo loading
const HomePage: FC = () => {
  useGetJobsList()
  const { error } = useSelector((state: RootState) => state.jobsList)
  const searchResult = () => {
    if (error) {
      return <ErrorMessage />
    }
    return <JobsList />
  }

  return (
    <>
      <GlobalSearch />
      <main className={mainCssClass}>
        <FilterMenu />
        { searchResult() }
      </main>
    </>
  )
}

export default HomePage
