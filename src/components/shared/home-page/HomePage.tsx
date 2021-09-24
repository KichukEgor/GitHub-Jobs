import { FC } from "react"

import { JobsList, GlobalSearch } from "../../features"

import FilterMenu from "../../features/location-menu/FilterMenu"

import "./HomePage.scss"

const mainCssClass= 'home-page'

const HomePage: FC = () => {
  return (
    <>
      <GlobalSearch />
      <main className={`${mainCssClass}__main`}>
        <FilterMenu />
        <JobsList />
      </main>
    </>
  )
}

export default HomePage