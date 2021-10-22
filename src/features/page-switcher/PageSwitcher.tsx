import { FC } from 'react'
import { useDispatch } from 'react-redux'

import PageSwitcherButton from '../../common/components/page-switcher-button/PageSwitcherButton'

import { setCurrentPage } from '../../store/jobs-list/actions'
import { usePagination } from '../../hooks/usePagination'

import './PageSwitcher.scss'

const mainCssClass = 'page-switcher'

type TProps={
  lobsCount: number,
  pageLimit: number,
  currentPage: number
}

const PageSwitcher: FC<TProps> = ({ lobsCount, pageLimit, currentPage }) => {
  const { arrayOfPageNum } = usePagination(lobsCount, pageLimit)
  const dispatch = useDispatch()
  const switchPageHandler = (nextPage: number) => dispatch(setCurrentPage(nextPage))

  return (
    <div className={mainCssClass}>
      <PageSwitcherButton
        buttonContent={<i className="fas fa-angle-left" />}
        disabled={currentPage === 1}
        onClick={() => switchPageHandler(currentPage - 1)}
      />
      { arrayOfPageNum.map((pageNum) => (
        <PageSwitcherButton
          key={pageNum}
          currentPage={currentPage}
          buttonContent={pageNum}
          onClick={() => switchPageHandler(pageNum)}
        />
      )) }
      <PageSwitcherButton
        buttonContent={<i className="fas fa-angle-right" />}
        disabled={currentPage === arrayOfPageNum.length}
        onClick={() => switchPageHandler(currentPage + 1)}
      />
    </div>
  )
}

export default PageSwitcher
