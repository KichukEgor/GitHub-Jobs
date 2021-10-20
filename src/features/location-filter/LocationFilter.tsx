import { FC, useState } from 'react'

import SearchInput from '../../common/components/search-input/SearchInput'
import SortLocation from '../../common/components/sort-location/SortLocation'

import './LocationFilter.scss'

const mainCssStyle = 'location-filter'

const LocationFilter:FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <section className={mainCssStyle}>
      <h1 className={`${mainCssStyle}__title`}>LOCATION</h1>
      <SearchInput
        iconClassName="fas fa-globe-americas"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="City, state, zip code or country"
      />
      <SortLocation />
    </section>
  )
}

export default LocationFilter
