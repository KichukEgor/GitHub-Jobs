import { MouseEventHandler } from 'react'
import icons from '../../../assets/icons.svg'

/* TODO */
type TIconId={
    iconId: 'cross'
    onClick?: MouseEventHandler<SVGSVGElement>
    className?: string
    size?: string
}

type TProps={
    iconId: 'cross'
    onClick?: MouseEventHandler<SVGSVGElement>
    className?: string
    size?: string
}

export const Icon = ({
  iconId, size, className, onClick
}:TProps) => (
  <svg className={className} width={size} height={size} onClick={onClick}>
    <use href={`${icons}#${iconId}`} />
  </svg>
)
