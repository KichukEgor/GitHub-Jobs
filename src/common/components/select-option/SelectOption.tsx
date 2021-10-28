import { ChangeEventHandler, FC } from 'react'

import './SelectOption.scss'

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
  <label className={`${mainClassCss} ${className}`} htmlFor="select-page-limit">
    Limit
    <select
      id="select-page-limit"
      name="page"
      value={currentValue}
      className={`${mainClassCss}__select`}
      onChange={onChange}
    >
      {optionValues.map(
        (optionValue) =>
          <option className={className} value={optionValue}>{optionValue}</option>
      )}
    </select>
  </label>
)

export default Select
