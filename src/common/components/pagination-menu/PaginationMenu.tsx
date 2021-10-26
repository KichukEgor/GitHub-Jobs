import { FC } from 'react'

import SelectPageLimit from '../select-page-limit/SelectPageLimit'
import PageSwitcher from '../../../features/page-switcher/PageSwitcher'

import './PaginationMenu.scss'

type TProps={
    lobsCount: number,
    pageLimit: number,
    currentPage: number
}

const mainClassCss = 'pagination-menu'

const PaginationMenu:FC<TProps> = ({ lobsCount, pageLimit, currentPage }) => (
  <section className={mainClassCss}>
    <SelectPageLimit />
    <PageSwitcher lobsCount={lobsCount} pageLimit={pageLimit} currentPage={currentPage} />
  </section>
)

export default PaginationMenu
