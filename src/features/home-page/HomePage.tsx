import { FC } from 'react'
import { JobsList, GlobalSearch } from '../index'
import FilterMenu from '../filter-menu/FilterMenu'

import useGetJobsList from '../../hooks/useGetJobsList'

import './HomePage.scss'

const mainCssClass = 'home-page'
// todo loading
const HomePage: FC = () => {
  const error = useGetJobsList()
  const searchResult = () => {
    if (error) {
      return <h1>{error}</h1>
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
