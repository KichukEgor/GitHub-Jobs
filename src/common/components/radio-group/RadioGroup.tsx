import { FC } from 'react'

import { useDispatch } from 'react-redux'

import RadioButton from '../radio-button/RadioButton'

import { setSearchLocationParam } from '../../../store/jobs-list/actions'

import './RadioGroup.scss'

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
  location: string
}

const mainCssStyle = 'radio-group'

const RadioGroup:FC<TProps> = ({ location }) => {
  const dispatch = useDispatch()
  const handleChange = (value:string) => {
    dispatch(setSearchLocationParam(value))
  }
  return (
    <ul className={mainCssStyle}>
      {locationInputData.map(({ name, value }) => (
        <RadioButton
          key={value}
          name={name}
          checked={location === value}
          value={value}
          onClick={() => handleChange(value)}
        />
      ))}
    </ul>
  )
}

export default RadioGroup
