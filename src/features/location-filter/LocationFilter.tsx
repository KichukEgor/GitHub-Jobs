import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchInput from '../../common/components/search-input/SearchInput'
import SortLocation from '../../common/components/sort-location/SortLocation'

import useDebounce from '../../hooks/useDebounce'
import { setSearchLocationParam } from '../../store/jobs-list/actions'
import { selectLocation } from '../../store/jobs-list/selectors'

import './LocationFilter.scss'

const mainCssStyle = 'location-filter'

const LocationFilter:FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 500)
  const dispatch = useDispatch()

  const location: string = useSelector(selectLocation)
  useEffect(() => {
    dispatch(setSearchLocationParam(debouncedValue))
  }, [debouncedValue, location, dispatch])
  return (
    <section className={mainCssStyle}>
      <h1 className={`${mainCssStyle}__title`}>LOCATION</h1>
      <SearchInput
        iconClassName="fas fa-globe-americas"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="City, state, zip code or country"
      />
      <SortLocation
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </section>
  )
}

export default LocationFilter
