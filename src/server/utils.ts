import { Response } from 'miragejs'
import { HttpStatusCode } from '../common/enums/httpStatusCode'

import { TJob } from '../common/models/job'

export const getResponseError = (statusCode: HttpStatusCode, message: string) => new Response(statusCode, undefined, message)

export const getPaginatedJobs = (jobs: TJob[], queryParams: Record<string, string>) => {
  const page = Number(queryParams.page)
  const limit = Number(queryParams.limit)
  const minIndex = (page - 1) * limit
  const maxIndex = page * limit
  return jobs.slice(minIndex, maxIndex)
}

type TProps = {
  description?: string,
  location?: string,
  type?: string
}

export const getFilteredJobs = (jobs:TJob[], { description, location, type }:TProps) => {
  let filteredJobslist = jobs
  if (description) {
    filteredJobslist = filteredJobslist.filter(
      (item) => item.description?.includes(description)
    )
  }
  if (location) {
    filteredJobslist = filteredJobslist.filter(
      (item) => item.location?.includes(location)
    )
  }
  if (type) {
    filteredJobslist = filteredJobslist.filter(
      (item) => item.type?.includes(type)
    )
  }
  return filteredJobslist
}
