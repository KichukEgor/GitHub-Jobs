import { ChangeEventHandler, FC } from 'react'

import './RadioButton.scss'

const mainCssStyle = 'radio-button'

type TProps = {
  value: string
  name: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioButton:FC<TProps> = ({
  value, name, onChange, checked
}) => (
  <label className={mainCssStyle} htmlFor={value}>
    <input
      name={name}
      id={value}
      value={value}
      checked={checked}
      type="radio"
      className={mainCssStyle}
      onChange={onChange}
    />
    {value}
  </label>
)

export default RadioButton
