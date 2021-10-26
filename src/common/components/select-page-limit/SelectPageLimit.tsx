import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import SelectOption from '../select-option/SelectOption'

import { setPageLimit } from '../../../store/jobs-list/actions'

import './SelectPageLimit.scss'

const mainClassCss = 'select-page-limit'

const SelectPageLimit = () => {
  const [limitValue, setLimitValue] = useState<number>(5)
  const dispatch = useDispatch()

  useEffect(
    () => { dispatch(setPageLimit(limitValue)) },
    [dispatch, limitValue]
  )

  return (
    <label className={mainClassCss} htmlFor="select-page-limit">
      Limit
      <select
        id="select-page-limit"
        name="page"
        className={`${mainClassCss}__select`}
        onChange={(e) => setLimitValue(Number(e.target.value))}
      >
        <SelectOption value={5} />
        <SelectOption value={10} />
        <SelectOption value={15} />
      </select>
    </label>
  )
}

export default SelectPageLimit
