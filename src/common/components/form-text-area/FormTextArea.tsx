import styled from 'styled-components'

import { Control, useController } from 'react-hook-form'

const TextArea = styled.textarea`
  width: 100%;
  min-height: 14rem;
  font-size: 1.4rem;
  padding: .4rem;
`

const Label = styled.label`
  display: block;
  padding-bottom: .8rem;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 700;
`

type TProps = {
    name: string
    control: Control<any, any>
}

export function FormTextAria({
  name, control
}: TProps) {
  const { field: { value, onChange } } = useController({
    name,
    control
  })

  return (
    <div>
      <Label htmlFor={name}>{name}</Label>
      <TextArea value={value} placeholder={name} onChange={onChange} />
    </div>

  )
}
