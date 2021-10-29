import { FC } from 'react'

import SelectPageLimit from '../select-page-limit/SelectPageLimit'
import PageSwitcher from '../../../features/page-switcher/PageSwitcher'

import './PaginationMenu.scss'

type TProps={
    lobsCount: number,
    limit: number,
    page: number
}

const mainClassCss = 'pagination-menu'

const PaginationMenu:FC<TProps> = ({ lobsCount, limit, page }) => (
  <section className={mainClassCss}>
    <SelectPageLimit />
    <PageSwitcher lobsCount={lobsCount} limit={limit} page={page} />
  </section>
)

export default PaginationMenu
