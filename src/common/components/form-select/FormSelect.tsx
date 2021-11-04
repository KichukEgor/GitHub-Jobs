import { UseFormRegister } from 'react-hook-form'

import './FormSelect.scss'

type TProps = {
  register:UseFormRegister<Record<string, string>>,
  options: string[],
  name: string
}

const mainCssClass = 'form-select'

export const FormSelect = ({
  register, options, name, ...rest
}: TProps) => (
  <div className={mainCssClass}>
    <label className={`${mainCssClass}__label`} htmlFor={name}>{name}</label>
    <select className={`${mainCssClass}__select`} id={name} {...register(name)} {...rest}>
      {options.map((value:string) => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  </div>
)
