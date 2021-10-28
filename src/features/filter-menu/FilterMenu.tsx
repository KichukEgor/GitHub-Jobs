import { memo } from 'react'

import CheckJobTypeEmployees from '../../common/components/check-job-type-employees/check-job-type-employees'
import LocationFilter from '../location-filter/LocationFilter'

import './FilterMenu.scss'

const mainCssStyle = 'filter-menu'

const FilterMenu = () => (
  <form action="" className={`${mainCssStyle}`}>
    <CheckJobTypeEmployees />
    <LocationFilter />
  </form>
)

export default memo(FilterMenu)
