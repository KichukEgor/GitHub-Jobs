import { FC, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'
import { Input } from '../../common/components/input/Input'
import { FormSelect } from '../../common/components/form-select/FormSelect'
import { Icon } from '../../common/components/icon/Icon'
import ImageUploader from '../../common/components/imageUploader/ImageUploader'
import * as S from './styled'

import { inputData } from './inputData'

export const Cross = styled(Icon)`
  top: 2rem;
  right: 1rem;
  fill: red;
  position: absolute;
  z-index: 100;
  
  :hover {
    cursor: pointer;
  }
`

type TProps = {
    modalVisibility: MouseEventHandler<SVGSVGElement>
}

type TInputs = {
    company: string;
    title: string;
    logo: string;
    type: 'Full Time' | 'Part Time';
}

const mainClassCss = 'modal-job-form'

const ModalJobForm:FC<TProps> = ({ modalVisibility }) => {
  const {
    register, control, handleSubmit, formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data:any) => {
    console.log(data)
  }

  return (
    <S.ModalWrapper>
      <S.Form className={mainClassCss} onSubmit={handleSubmit(onSubmit)}>
        <Cross iconId="cross" size="3rem" onClick={modalVisibility} />
        <S.H1>Create new Job</S.H1>
        {inputData.map(({ name, validationRules, errorMessage }) => (
          <Input
            key={name}
            register={register}
            control={control}
            fieldName={name}
            validationRules={validationRules}
            errorMessage={errorMessage}
          />
        ))}
        <S.H3>Description</S.H3>
        <S.TextArea />
        <FormSelect
          name="type"
          options={['Full Time', 'Part Time']}
          register={register}
        />
        <ImageUploader />
        <S.SubmitInput type="submit" />
      </S.Form>
    </S.ModalWrapper>
  )
}

export default ModalJobForm
