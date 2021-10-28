import { ChangeEventHandler, FC } from 'react'

import './SearchInput.scss'

type TSearchInput = {
    iconClassName: string,
    value: string,
    placeholder?: string,
    inputClassName?: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const mainCssClass = 'search-field'

const SearchInput: FC <TSearchInput> = ({
  iconClassName,
  placeholder,
  value,
  onChange,
  inputClassName
}) => (
  <div className={mainCssClass}>
    <i className={`${iconClassName} ${mainCssClass}__icon`} />
    <input
      className={`${mainCssClass}__input ${inputClassName}`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
)

export default SearchInput
