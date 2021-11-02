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
  padding: 3rem 2rem;
  border-radius: 1rem;
  align-items: center;
  background-color: rgb(204, 199, 199);
  z-index: 1000
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 14rem;
  font-size: 1.4rem;
  padding: .4rem;
`
