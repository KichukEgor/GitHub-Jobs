import { ChangeEvent } from 'react'
import { Control, useController } from 'react-hook-form'
import styled from 'styled-components'
import { showCorrectImage } from './utils'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

const Col1 = styled.div`
  display: flex;
  height: 5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
`

const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 20%;
  object-fit: cover;
`

type TProps = {
    errorMessage: string
    watch: string | File
    name: string
    defaultImage: string
    control: Control<any, Record<string, unknown>>
    rules: {
        required: boolean,
        validate: (watch: File | string) => boolean
    }
}

const ImageUploader = ({
  errorMessage, name, watch, control, defaultImage, rules
}: TProps) => {
  const { field: { onChange }, formState: { errors } } = useController({
    name,
    control,
    rules
  })

  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) onChange(e.target.files[0])
    else onChange(defaultImage)
  }

  return (
    <Container>
      <Col1>
        <Title>Choose logo</Title>
        <input
          type="file"
          onChange={changeHandler}
        />
        {errors?.[name] && <span>{errorMessage}</span>}
      </Col1>
      <Image
        alt="defaultImage"
        src={
          showCorrectImage(watch, defaultImage)
        }
      />
    </Container>
  )
}

export default ImageUploader
