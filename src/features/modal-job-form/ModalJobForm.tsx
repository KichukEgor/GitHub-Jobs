import { FC, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Input } from '../../common/components/input/Input'
import { FormSelect } from '../../common/components/form-select/FormSelect'
import { Icon } from '../../common/components/icon/Icon'
import ImageUploader from '../../common/components/imageUploader/ImageUploader'
import { FormTextAria } from '../../common/components/form-text-area/FormTextArea'

import { inputParameters } from './inputParameters'
import { setNewJob, TNewJobPayload } from '../../store/jobs-list/actions'
import { validateUploadedImage } from '../../common/utils/jobFormValidationRules'

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, .7);
  z-index: 100;
  overflow: hidden;
`

const Form = styled.form`
  position: absolute;
  min-width: 50rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
  align-items: center;
  background-color: rgb(204, 199, 199);
  z-index: 1000
`

const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const SubmitInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: .6rem;
  box-shadow: 0 0 .4rem rgb(6, 123, 245);
`

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

export type TModalJobForm = {
    company: 'company'
    title: string
    company_logo: string
    type: 'Full Time' | 'Part Time'
}
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg'
const mainClassCss = 'modal-job-form'

const ModalJobForm:FC<TProps> = ({ modalVisibility }) => {
  const {
    register, control, handleSubmit, formState: { isValid }, watch
  } = useForm<TModalJobForm>({
    mode: 'onChange',
    defaultValues: { company_logo: defaultImage }
  })

  const dispatch = useDispatch()
  const onSubmit = (data: TNewJobPayload) => {
    dispatch(setNewJob(data))
  }

  return (
    <ModalWrapper>
      <Form className={mainClassCss} onSubmit={handleSubmit(onSubmit)}>
        <Cross iconId="cross" size="3rem" onClick={modalVisibility} />
        <H1>Create new Job</H1>
        {inputParameters.map(({ name, validationRules, errorMessage }) => (
          <Input
            key={name}
            control={control}
            name={name}
            validationRules={validationRules}
            errorMessage={errorMessage}
          />
        ))}
        <FormTextAria control={control} name="description" />
        <FormSelect
          name="type"
          options={['Full Time', 'Part Time']}
          register={register}
        />
        <ImageUploader
          rules={{
            required: true,
            validate: validateUploadedImage
          }}
          name="company_logo"
          defaultImage={defaultImage}
          control={control}
          errorMessage="wrong type"
          watch={watch('company_logo')}
        />
        <SubmitInput type="submit" disabled={!isValid} />
      </Form>
    </ModalWrapper>
  )
}

export default ModalJobForm
