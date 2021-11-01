import {
  UseFormRegister
} from 'react-hook-form'

import './Input.scss'

type TInput = {
    name: string
    register: UseFormRegister<Record<string, string>>
}

const mainCssClass = 'input'

export function Input({ register, name, ...rest }: TInput) {
  return (
    <div className={mainCssClass}>
      <label className={`${mainCssClass}__label`} htmlFor={name}>{name}</label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input className={`${mainCssClass}__input`} {...register(name)} {...rest} />
    </div>
  )
}
