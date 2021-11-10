import { Control, useController } from 'react-hook-form'

import './Input.scss'

type TProps = {
    name: string
    validationRules: any
    errorMessage: string
    control: Control<any, any>
}

const mainCssClass = 'input'

export function Input({
  name, control, validationRules, errorMessage
}: TProps) {
  const { field: { value, onChange }, formState: { errors } } = useController({
    name,
    control,
    rules: {
      required: true,
      pattern: {
        value: validationRules,
        message: errorMessage
      }
    }
  })

  return (

    <div className={mainCssClass}>
      <label className={`${mainCssClass}__label`} htmlFor={name}>{name}</label>
      <input
        placeholder={name}
        value={value}
        className={`${mainCssClass}__input`}
        onChange={onChange}
      />
      {errors?.[name] && <span>{errorMessage}</span>}
    </div>

  )
}
