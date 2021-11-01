import { createServer, Model, Response } from 'miragejs'
import { v4 as uuidv4 } from 'uuid'

import { TJob } from '../../src/common/models/job'

import { jobsList } from './mocks'

import {
  getFilteredJobs, getJobsModelsAttrs,
  getPaginatedJobs,
  getResponseError
} from './utils'

import { HttpStatusCode } from '../common/enums/httpStatusCode'

createServer({
  models: {
    job: Model
  },
  routes() {
    this.namespace = 'api'
    this.get('/jobs', (schema, { queryParams }) => {
      const jobs: TJob[] = getJobsModelsAttrs(schema.all('job').models)
      const filteredJobs = getFilteredJobs(jobs, queryParams)
      const totalJobsCount = filteredJobs.length
      const paginatedJobs = getPaginatedJobs(filteredJobs, queryParams)
      if (totalJobsCount) {
        return new Response(HttpStatusCode.OK, undefined, { jobs: paginatedJobs, jobsCount: totalJobsCount })
      }
      return getResponseError(HttpStatusCode.NOT_FOUND)
    })
    this.get('/jobs/:id', (schema, { params }) => {
      const job = this.schema.find('job', params.id)
      return job ?? getResponseError(HttpStatusCode.NOT_FOUND)
    })
    this.put('/jobs', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      attrs.id = uuidv4()
      attrs.created_at = new Date()
      return { attrs }
    })
  },
  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
