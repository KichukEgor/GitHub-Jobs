import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from '../select-option/SelectOption'

import { setPageLimit } from '../../../store/jobs-list/actions'
import { selectPageLimit } from '../../../store/jobs-list/selectors'

import './SelectPageLimit.scss'

const mainClassCss = 'select-page-limit'

const SelectPageLimit:FC = () => {
  const limit = useSelector(selectPageLimit)
  const dispatch = useDispatch()

  return (
    <Select
      label="Limit"
      currentValue={limit}
      optionValues={[5, 10, 15]}
      className={mainClassCss}
      onChange={(e) => dispatch(setPageLimit(Number(e.target.value)))}
    />
  )
}

export default SelectPageLimit
