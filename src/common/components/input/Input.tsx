import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import './Input.scss'

type TProps = {
    fieldName: string
    validationRules: RegExp
    errorMessage: string
    register: any
    control: any
}
/* TODO убрать регистер, добавить rules={{ required: true }} */
const mainCssClass = 'input'

export function Input({
  register, fieldName, control, validationRules, errorMessage
}: TProps) {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({
        field: {
          onChange, onBlur, value, name, ref
        },
        fieldState: {
          invalid, isTouched, isDirty, error
        },
        formState: { errors }
      }) => (
        <div className={mainCssClass}>
          <label className={`${mainCssClass}__label`} htmlFor={fieldName}>{fieldName}</label>
          <input
            placeholder={fieldName}
            className={`${mainCssClass}__input`}
            {...register(fieldName, {
              required: 'This is required.',
              pattern: {
                value: validationRules,
                message: errorMessage
              }
            })}
          />
          <ErrorMessage errors={errors} name={fieldName} />
        </div>
      )}
    />
  )
}
