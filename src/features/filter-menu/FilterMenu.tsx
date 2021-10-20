import { memo } from 'react'

import CheckJobTypeEmployees from '../check-job-type-employees/check-job-type-employees'

import './FilterMenu.scss'
import LocationFilter from '../location-filter/LocationFilter'

const mainCssStyle = 'filter-menu'

const FilterMenu = () => (
  <form action="" className={`${mainCssStyle}`}>
    <CheckJobTypeEmployees />
    <LocationFilter />
  </form>
)

export default memo(FilterMenu)
