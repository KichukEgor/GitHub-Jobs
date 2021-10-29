import { FC } from 'react'
import DOMPurify from 'dompurify'

import './JobDescription.scss'

type TProps = {
  description: string
}

const mainClassCss = 'job-description'

const JobDescription:FC<TProps> = ({ description }) => {
  const createMarkup = () => ({ __html: DOMPurify.sanitize(description) })

  return <div className={mainClassCss} dangerouslySetInnerHTML={createMarkup()} />
}

export default JobDescription
