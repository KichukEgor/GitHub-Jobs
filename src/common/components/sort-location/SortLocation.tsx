import { ChangeEventHandler, FC, useState } from 'react'

import './SortLocation.scss'
import { useDispatch } from 'react-redux'
import RadioButton from '../radio-button/RadioButton'
import { setSearchLocationParam } from '../../../store/jobs-list/actions'

const locationInputData = [
  {
    name: 'city',
    value: 'London'
  },
  {
    name: 'city',
    value: 'Amsterdam'
  },
  {
    name: 'city',
    value: 'Schwerin'
  },
  {
    name: 'city',
    value: 'Berlin'
  }
]

type TProps={
  searchValue: string
  setSearchValue:(arg:string)=>void
}

const mainCssStyle = 'sort-location'

const SortLocation:FC<TProps> = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch()
  const handleChange = (value:string) => {
    dispatch(setSearchLocationParam(value))
    setSearchValue(value)
  }
  return (
    <ul className={mainCssStyle}>
      {locationInputData.map(({ name, value }) => (
        <RadioButton
          key={value}
          name={name}
          checked={searchValue === value}
          value={value}
          onClick={() => handleChange(value)}
        />
      ))}
    </ul>
  )
}

export default SortLocation
