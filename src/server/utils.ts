import { Response } from 'miragejs'

import { TJob } from '../common/models/job'

// getResponseError
export enum HttpStatusCode {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  OK = 200
}

export const getResponseError = (statusCode: HttpStatusCode) => new Response(statusCode)

// getPaginatedJobs
export const getPaginatedJobs = (jobs: string | any[], queryParams: Record<string, string>) => {
  const page = Number(queryParams.page)
  const limit = Number(queryParams.limit)
  const minIndex = (page - 1) * limit
  const maxIndex = page * limit
  return jobs.slice(minIndex, maxIndex)
}

// getFilteredJobs
type TProps = {
  description?: string,
  location?: string
}

export const getFilteredJobs = (jobs:TJob[], { description, location }:TProps) => {
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
  return filteredJobslist
}
