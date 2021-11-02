import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { Input } from '../../common/components/input/Input'
import { FormSelect } from '../../common/components/form-select/FormSelect'

import * as S from './styled'

import { api } from '../../api/api'

type TProps = {
    modalVisibility?: (arg:boolean)=>void
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
  } = useForm<TInputs>({
    mode: 'onBlur'
  })
  const history = useHistory()
  const closeModal = () => {
    if (modalVisibility) {
      modalVisibility(true)
    }
    history.push('./')
  }
  const onSubmit = (data:any) => {
    console.log('123')
    api.patch('/jobs', data)
  }

  return (
    <S.ModalWrapper>
      <svg>
        <use xlinkHref="#cross" />
      </svg>
      <S.Form className={mainClassCss} onSubmit={handleSubmit(onSubmit)}>
        <S.H1>Create new Job</S.H1>
        {/* TODO типизация */}
        {(['company', 'title', 'region', 'logo']).map((fieldName) => (
          <Input key={fieldName} register={register} fieldName={fieldName} control={control} />
        ))}
        <S.TextArea />
        <input type="file" accept=".jpg,.jpeg,.png" />
        <FormSelect
          name="type"
          options={['Full Time', 'Part Time']}
          register={register}
        />
        <input type="submit" />
      </S.Form>
    </S.ModalWrapper>
  )
}

export default ModalJobForm
