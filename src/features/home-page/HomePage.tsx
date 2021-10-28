import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { JobsList, GlobalSearch } from '../index'
import FilterMenu from '../filter-menu/FilterMenu'
import ErrorMessage from '../../common/components/error-message/ErrorMessage'
import Spinner from '../../common/components/spinner/Spinner'

import useGetJobsList from '../../hooks/useGetJobsList'

import { selectError, selectIsLoading } from '../../store/jobs-list/selectors'
import { setJobListLoading } from '../../store/jobs-list/actions'

import './HomePage.scss'

const mainCssClass = 'home-page'

const HomePage: FC = () => {
  useGetJobsList()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setJobListLoading(false))
  }, [dispatch, isLoading])

  const searchResult = (() => {
    if (error) {
      return <ErrorMessage />
    }
    return <JobsList />
  })()

  return (
    <>
      <GlobalSearch />
      <main className={mainCssClass}>
        <FilterMenu />
        { isLoading ? <Spinner /> : searchResult }
      </main>
    </>
  )
}

export default HomePage
