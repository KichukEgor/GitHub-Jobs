import { ChangeEventHandler, FC } from 'react'

import './Select.scss'

type TProps = {
    label: string
    optionValues: (number|string)[]
    currentValue: number|string
    onChange: ChangeEventHandler<HTMLSelectElement>
    className?: string
}

const mainClassCss = 'select'

const Select:FC<TProps> = ({
  label, currentValue, optionValues, onChange, className
}) => (
  <label className={`${mainClassCss} ${className}`} htmlFor={label}>
    {label}
    <select
      id={label}
      name={label}
      value={currentValue}
      className={`${mainClassCss}__select`}
      onChange={onChange}
    >
      {optionValues.map(
        (value) => (
          <option
            key={value}
            className={className}
            value={value}
          >
            {value}
          </option>
        )
      )}
    </select>
  </label>
)

export default Select
