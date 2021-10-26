import { Instantiate, Registry, Response } from 'miragejs'
import { AnyFactories, ModelDefinition } from 'miragejs/-types'
import { HttpStatusCode } from '../common/enums/httpStatusCode'
import { TJob } from '../common/models/job'

export const getResponseError = (statusCode: HttpStatusCode) => new Response(statusCode, undefined)

export const getJobsModelsAttrs = (arg: Instantiate<Registry<{job: ModelDefinition<Record<string, unknown>>}, AnyFactories>, 'job'>[]) => {
  const JobsModelsAttrs: TJob[] = []
  arg.forEach((item) => JobsModelsAttrs.push(item.attrs as TJob))
  return JobsModelsAttrs
}

export const getPaginatedJobs = (jobs: TJob[], queryParams: Record<string, string>) => {
  const page = Number(queryParams.page)
  const limit = Number(queryParams.limit)
  const minIndex = (page - 1) * limit
  const maxIndex = page * limit
  return jobs.slice(minIndex, maxIndex)
}

export const getFilteredJobs = (jobs:TJob[], { description, location, type }:Record<string, string>) => {
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
