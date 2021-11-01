import { useMemo } from 'react'

export const inputData = useMemo(
  () => [
    {
      company: '',
      value: '',
      label: 'login.labelUser',
      type: 'text'
    }
  ],
  []
)
