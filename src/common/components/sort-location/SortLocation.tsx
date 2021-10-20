import { FC } from 'react'

import './SortLocation.scss'

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

const mainCssStyle = 'sort-location'

const SortLocation:FC = () => (
  <ul className={mainCssStyle}>
    {locationInputData.map(({ name, value, type }) => (
      <label key={value} className={`${mainCssStyle}__label`} htmlFor={value}>
        <input
          name={name}
          id={value}
          value={value}
          type={type}
          className={`${mainCssStyle}__radio-button`}
        />
        {value}
      </label>
    ))}
  </ul>
)

export default SortLocation
