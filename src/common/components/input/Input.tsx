import { Controller, useController } from 'react-hook-form'

import './Input.scss'
import { ErrorMessage } from '@hookform/error-message'

type TProps = {
    fieldName: string
    register: any
    control: any
}

const mainCssClass = 'input'

export function Input({ register, fieldName, control }: TProps) {
  return (
    <Controller
      control={control}
      name="test"
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
                value: /d+/,
                message: 'This input is number only.'
              }
            })}
          />
          <ErrorMessage errors={errors} name={fieldName} />
        </div>
      )}
    />
  )
}
