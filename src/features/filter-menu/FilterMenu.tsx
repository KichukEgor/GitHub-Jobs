import { memo } from 'react'

import CheckJobTypeEmployees from '../check-job-type-employees/check-job-type-employees'

import './FilterMenu.scss'

const locationInputData = [
  {
    name: 'city',
    value: 'London',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'Amsterdam',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'New York',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'Berlin',
    type: 'radio'
  }
]

const mainCssStyle = 'filter-menu'

const FilterMenu = () => (
  <form action="" className={`${mainCssStyle}`}>
    <CheckJobTypeEmployees />
    <h1 className={`${mainCssStyle}__heading`}>LOCATION</h1>
    <input
      className={`${mainCssStyle}__search`}
      type="text"
      placeholder="City, state, zip code or country"
    />
    <ul>
      {locationInputData.map(({ name, value, type }) => (
        <li key={value}>
          <input
            name={name}
            id={value}
            value={value}
            type={type}
            className={`${mainCssStyle}__location-button`}
          />
          <label className={`${mainCssStyle}__location-label`} htmlFor={value}>
            {value}
          </label>
        </li>
      ))}
    </ul>
  </form>
)

export default memo(FilterMenu)
