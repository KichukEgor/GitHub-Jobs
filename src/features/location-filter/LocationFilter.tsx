import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchInput from '../../common/components/search-input/SearchInput'
import RadioGroup from '../../common/components/radio-group/RadioGroup'

import { locationInputData } from './inputData'

import { setSearchLocationParam } from '../../store/jobs-list/actions'
import { selectLocation } from '../../store/jobs-list/selectors'

import useDebounce from '../../hooks/useDebounce'

import './LocationFilter.scss'

const mainCssStyle = 'location-filter'

const LocationFilter:FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 500)
  const location = useSelector(selectLocation)
  const dispatch = useDispatch()

  const handleChange = (value:string) => {
    dispatch(setSearchLocationParam(value))
  }

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
        inputData={locationInputData}
        onChange={(e) => handleChange(e.target.value)}
      />
    </section>
  )
}

export default LocationFilter
