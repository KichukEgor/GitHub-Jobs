import { useState } from 'react'
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

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<any>()
  const [isFilePicked, setIsFilePicked] = useState<boolean>(false)

  const changeHandler = (e:any) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]))
    setIsFilePicked(true)
  }

  return (
    <Container>
      <Col1>
        <Title>Choose logo</Title>
        <input type="file" accept=".jpg,.jpeg,.png" name="file" onChange={changeHandler} />
      </Col1>
      <Image
        alt="default"
        src={!isFilePicked ? 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg' : selectedFile}
      />
    </Container>
  )
}

export default ImageUploader
