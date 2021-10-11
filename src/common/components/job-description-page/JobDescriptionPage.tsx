import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { JobLocation, JobPostingDate, JobTypeOfEmployees } from '../../../features'

import { getJobDescription } from '../../../store/job-description/actions'
import { RootState } from '../../../store/rootReducer'

import './JobDescriptionPage.scss'

const mainCssClass = 'description-page'

const JobDescriptionPage: FC = () => {
  const dispatch = useDispatch()
  const { id } : {id:string} = useParams()
  console.log(typeof id)
  useEffect(() => {
    dispatch(getJobDescription(id))
  }, [dispatch, id])

  const { job } = useSelector((state: RootState) => state.jobDetails)
  /* ЭТО ПРОСТО ПРИМЕР РАБОТЫ С XML */
  const a = "<div id='foo'><a href='#'>Link</a><span></span></div>"
  let descriptionConvertedToXML = null
  descriptionConvertedToXML = new DOMParser().parseFromString(a, 'text/xml')
  /* TODO пазобраться как вставлять xml разметку в код */
  // @ts-ignore
  console.log(descriptionConvertedToXML.firstChild.innerHTML)
  // @ts-ignore
  console.dir(descriptionConvertedToXML.firstChild.innerHTML)

  return (
    <section>
      {/* TODO будет 2 компанента */}
      <div className={mainCssClass}>
        <div>
          <h1 className={`${mainCssClass}__title`}>{job?.title}</h1>
          <JobTypeOfEmployees type={job?.type} />
        </div>
        <JobPostingDate created_at={job?.created_at} />
        <JobLocation location={job?.location} />
        {/* TODO */}
        {/* @ts-ignore */}
        {descriptionConvertedToXML.firstChild.innerHTML}
      </div>
    </section>
  )
}

export default JobDescriptionPage
