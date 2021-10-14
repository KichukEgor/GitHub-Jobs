import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentPage } from '../../store/jobs-list/actions'

import { usePagination } from '../../hooks/usePagination'

import './PageSwitcher.scss'

const mainCssClass = 'page-switcher'

type TProps={
  lobsCount: number,
  pageSize: number,
  currentPage: number
}

const PageSwitcher: FC<TProps> = ({ lobsCount, pageSize, currentPage }) => {
  const { arrayOfPageNum } = usePagination({ lobsCount, pageSize })
  const dispatch = useDispatch()
  const switchPageHandler = (nextPage: number) => dispatch(setCurrentPage(nextPage))

  return (
    <div className={mainCssClass}>
      <button type="button" onClick={() => switchPageHandler(currentPage - 1)} className={`${mainCssClass}__item`}>
        <i className="fas fa-angle-left" />
      </button>
      { arrayOfPageNum.map((pageNum) => (
        <button
          key={pageNum}
          type="button"
          onClick={() => switchPageHandler(pageNum)}
          // TODO ClassNames
          className={currentPage === pageNum ? `${mainCssClass}__item ${mainCssClass}__item_active` : `${mainCssClass}__item`}
        >
          {pageNum}
        </button>
      )) }
      <button type="button" onClick={() => switchPageHandler(currentPage + 1)} className={`${mainCssClass}__item`}>
        <i className="fas fa-angle-right" />
      </button>
    </div>
  )
}

export default PageSwitcher
