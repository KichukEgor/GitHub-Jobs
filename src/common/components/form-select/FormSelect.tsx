import { UseFormRegister } from 'react-hook-form'

type TProps = {
  register:UseFormRegister<Record<string, string>>,
  options: string[],
  name: string,
}

export const FormSelect = ({
  register, options, name, ...rest
}: TProps) => (
  <div>
    <label htmlFor={name}>{name}</label>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <select id={name} {...register(name)} {...rest}>
      {options.map((value:string) => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  </div>
)
