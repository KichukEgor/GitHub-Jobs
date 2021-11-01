import { MouseEventHandler } from 'react'
import './CreateJobButton.scss'

type TProps={
    onClick: MouseEventHandler<HTMLButtonElement>
}

const mainClassCss = 'create-job-button'

const CreateJobButton = ({ onClick }: TProps) => (
  <div className={mainClassCss}>
    <button
      type="button"
      className={`${mainClassCss}__button`}
      onClick={onClick}
    >
      new Job
    </button>
  </div>
)

export default CreateJobButton
