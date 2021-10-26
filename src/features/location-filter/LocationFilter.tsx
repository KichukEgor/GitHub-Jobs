import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchInput from '../../common/components/search-input/SearchInput'
import RadioGroup from '../../common/components/radio-group/RadioGroup'

import useDebounce from '../../hooks/useDebounce'
import { setSearchLocationParam } from '../../store/jobs-list/actions'

import { selectLocation } from '../../store/jobs-list/selectors'

import './LocationFilter.scss'

const mainCssStyle = 'location-filter'

const LocationFilter:FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 500)
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)

  useEffect(() => {
    dispatch(setSearchLocationParam(debouncedValue))
  }, [debouncedValue, dispatch])
  return (
    <section className={mainCssStyle}>
      <h1 className={`${mainCssStyle}__title`}>LOCATION</h1>
      <SearchInput
        iconClassName="fas fa-globe-americas"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="City, state, zip code or country"
      />
      <RadioGroup
        location={location}
      />
    </section>
  )
}

export default LocationFilter
