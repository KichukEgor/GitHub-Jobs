import { FC, useMemo } from 'react'
import { JobsList, GlobalSearch } from '../index'
import FilterMenu from '../filter-menu/FilterMenu'

import useOnInitHomePage from '../../hooks/useOnInitHomePage'

import './HomePage.scss'

const mainCssClass = 'home-page'
// todo loading
const HomePage: FC = () => {
  const error = useOnInitHomePage()
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
