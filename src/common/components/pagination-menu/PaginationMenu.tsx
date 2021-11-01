import { FC } from 'react'
import { useDispatch } from 'react-redux'

import PageSwitcher from '../../../features/page-switcher/PageSwitcher'
import Select from '../select/Select'

import { setPageLimit } from '../../../store/jobs-list/actions'

import './PaginationMenu.scss'

type TProps={
    lobsCount: number,
    limit: number,
    page: number
}

const mainClassCss = 'pagination-menu'

const PaginationMenu:FC<TProps> = ({ lobsCount, limit, page }) => {
  const dispatch = useDispatch()
  return (
    <section className={mainClassCss}>
      <Select
        label="Limit"
        currentValue={limit}
        optionValues={[5, 10, 15]}
        className={mainClassCss}
        onChange={(e) => dispatch(setPageLimit(Number(e.target.value)))}
      />
      <PageSwitcher
        lobsCount={lobsCount}
        limit={limit}
        page={page}
      />
    </section>
  )
}

export default PaginationMenu
