import { ChangeEventHandler, FC } from 'react'

import RadioButton from '../radio-button/RadioButton'

import './RadioGroup.scss'

type TProps = {
  inputData: Record<string, string|number>[],
  onChange: ChangeEventHandler<HTMLInputElement>
  location?: string
}

const mainCssStyle = 'radio-group'

const RadioGroup:FC<TProps> = ({ inputData, onChange, location }) => (
  <ul className={mainCssStyle}>
    {inputData.map(({ name, value }) => (
      <RadioButton
        key={value}
        name={name.toString()}
        checked={location === value}
        value={value.toString()}
        onChange={onChange}
      />
    ))}
  </ul>
)

export default RadioGroup
