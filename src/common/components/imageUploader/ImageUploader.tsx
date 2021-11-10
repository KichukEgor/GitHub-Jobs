import { FieldError, useController } from 'react-hook-form'
import styled from 'styled-components'

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
    register: any
    watch: any
    fieldName: string
    control: any
}

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg'

const ImageUploader = ({
  errorMessage, fieldName, watch, register, control
}: TProps) => {
  /* TODO утил для валидации */
  const { field: { name }, formState: { errors } } = useController({
    name: fieldName,
    control,
    rules: {
      required: true,
      validate: (values: File[]) => values[0]?.type === 'image/jpeg'
    }
  })

  return (
    <Container>
      <Col1>
        <Title>Choose logo</Title>
        <input
          name={name}
          {...register(name)}
          type="file"
        />
        {errors?.[name] && <span>{errorMessage}</span>}
      </Col1>
      <Image
        alt="default"
        src={
          watch === undefined || watch.length === 0
            ? defaultImage
            : URL.createObjectURL(watch[0])
        }
      />
    </Container>
  )
}

export default ImageUploader
