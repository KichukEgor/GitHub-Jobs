import { FC } from 'react'

import './PageSwitcher.scss'

const mainCssClass = 'page-switcher'

type TProps={
  lobsCount: number,
  pageSize: number,
  currentPage: number
}

const PageSwitcher: FC<TProps> = ({ lobsCount, pageSize, currentPage }) => {
  const pageCount: number = Math.ceil(lobsCount / pageSize)
  const arrayOfPageNum: number[] = []
  for (let i = 1; i <= pageCount; i += 1) {
    arrayOfPageNum.push(i)
  }

  return (
    <div className={mainCssClass}>
      { arrayOfPageNum.map((pageNum) => (
        <button type="button" className={currentPage === pageNum ? `${mainCssClass}__item_active` : `${mainCssClass}__item`}>
          {pageNum}
        </button>
      )) }
    </div>
  )
}

export default PageSwitcher
