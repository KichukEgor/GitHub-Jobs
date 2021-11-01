import { FC, MouseEventHandler } from 'react'

import * as S from './styled'

type TProps = {
  isOpen: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
}

export const Modal:FC<TProps> = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null

  return (
    <S.OverlayDiv>
      <S.Modal>
        {/* TODO SVG Sprite */}
        <button type="button" onClick={onClose}>Cross SVG</button>
        {children}
      </S.Modal>
    </S.OverlayDiv>
  )
}
