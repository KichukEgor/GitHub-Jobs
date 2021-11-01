import { FC, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

type TProps = {
  className: string
}

const Portal: FC<TProps> = ({
  children,
  className
}) => {
  const element = useMemo(() => document.createElement('div'), [])

  element.setAttribute('class', className)
  useEffect(() => {
    document.body.appendChild(element)
    return () => {
      document.body.removeChild(element)
    }
  }, [element])

  return createPortal(children, element)
}

export default Portal
