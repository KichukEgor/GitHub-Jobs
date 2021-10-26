import { FC, MouseEventHandler } from 'react'

import './RadioButton.scss'

const mainCssStyle = 'radio-button'

type TProps = {
  value: string
  name: string
  checked: boolean
  onClick: MouseEventHandler<HTMLInputElement>
}

const RadioButton:FC<TProps> = ({
  value, name, onClick, checked
}) => (
  <label className={mainCssStyle} htmlFor={value}>
    <input
      name={name}
      id={value}
      value={value}
      // TODO warning checked -> defaultChecked
      checked={checked}
      type="radio"
      className={mainCssStyle}
      onClick={onClick}
    />
    {value}
  </label>
)

export default RadioButton
