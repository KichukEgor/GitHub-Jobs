import { FC } from 'react'
import { useDispatch } from 'react-redux'

import PageSwitcherButton from '../../common/components/page-switcher-button/PageSwitcherButton'

import { setCurrentPage } from '../../store/jobs-list/actions'

import { createArrayOfPageNums } from './utils'

import './PageSwitcher.scss'

const mainCssClass = 'page-switcher'

type TProps={
  lobsCount: number,
  limit: number,
  page: number
}

const PageSwitcher: FC<TProps> = ({ lobsCount, limit, page }) => {
  const { arrayOfPageNum } = createArrayOfPageNums(lobsCount, limit)
  const dispatch = useDispatch()
  const switchPageHandler = (nextPage: number) => dispatch(setCurrentPage(nextPage))

  return (
    <div className={mainCssClass}>
      <PageSwitcherButton
        buttonContent={<i className="fas fa-angle-left" />}
        disabled={page === 1}
        onClick={() => switchPageHandler(page - 1)}
      />
      { arrayOfPageNum.map((pageNum) => (
        <PageSwitcherButton
          key={pageNum}
          page={page}
          buttonContent={pageNum}
          onClick={() => switchPageHandler(pageNum)}
        />
      )) }
      <PageSwitcherButton
        buttonContent={<i className="fas fa-angle-right" />}
        disabled={page === arrayOfPageNum.length}
        onClick={() => switchPageHandler(page + 1)}
      />
    </div>
  )
}

export default PageSwitcher
