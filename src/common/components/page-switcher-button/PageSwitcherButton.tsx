import React, { ReactElement } from 'react'

import './PageSwitcherButton.scss'

type TProps = {
  buttonContent: string | number | ReactElement
  page?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const mainCssClass = 'page-switcher-button'

const PageSwitcherButton = ({
  buttonContent, onClick, disabled, page
}:TProps) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={page === buttonContent ? `${mainCssClass}_active` : mainCssClass}
  >
    {buttonContent}
  </button>
)

export default PageSwitcherButton
