import { FC } from 'react'
import { JobsList, GlobalSearch } from '../index'
import FilterMenu from '../filter-menu/FilterMenu'

import './HomePage.scss'

const mainCssClass = 'home-page'
// todo ??
const HomePage: FC = () => (
  <>
    <GlobalSearch />
    <main className={mainCssClass}>
      <FilterMenu />
      <JobsList />
    </main>
  </>
)

export default HomePage
