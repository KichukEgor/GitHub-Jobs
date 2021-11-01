import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Input } from '../../common/components/input/Input'
import { FormSelect } from '../../common/components/form-select/FormSelect'

import { api } from '../../api/api'

import './JobForm.scss'

type TProps = {
    modalVisibility?: (arg:boolean)=>void
}

type TInputs = {
    company: string;
    title: string;
    logo: string;
    type: 'Full Time' | 'Part Time';
}

const mainClassCss = 'job-form'

const JobForm:FC<TProps> = ({ modalVisibility }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
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
    api.patch('/jobs', data)
  }

  return (
    <form className={mainClassCss} onSubmit={handleSubmit(onSubmit)}>
      <h1>Job</h1>
      {['company', 'title', 'logo'].map((value) => (
        <Input name={value} register={register} />
      ))}
      <textarea />
      <input type="file" accept=".jpg,.jpeg,.png" />
      <FormSelect
        name="type"
        options={['Full Time', 'Part Time']}
        register={register}
      />
      <input type="submit" />
    </form>
  )
}

export default JobForm
