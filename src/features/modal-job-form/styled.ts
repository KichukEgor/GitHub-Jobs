import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, .7);
  z-index: 100
`

export const Form = styled.form`
  position: absolute;
  min-width: 50rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
  align-items: center;
  background-color: rgb(204, 199, 199);
  z-index: 1000
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`

export const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 14rem;
  font-size: 1.4rem;
  padding: .4rem;
`

export const SubmitInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: .6rem;
  box-shadow: 0 0 .4rem rgb(6, 123, 245);
`
