import styled from 'styled-components'

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backgroundColor: #FFF;
  padding: 50px;
  zIndex: 1000
`
