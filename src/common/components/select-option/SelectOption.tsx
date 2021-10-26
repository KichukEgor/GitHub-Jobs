import { FC } from 'react'

type TProps = {
    value: number
    addClassName?: string
}

const SelectOption:FC<TProps> = ({ value, addClassName }) => (
  <option className={addClassName} value={value}>{value}</option>
)

export default SelectOption
