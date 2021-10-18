import { createServer, Model } from 'miragejs'

import { jobsList } from './mocks'

import {
  getFilteredJobs,
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
      const jobs = schema.all('job').models
      const filteredJobs = getFilteredJobs(jobs, queryParams)
      const totalJobsCount = filteredJobs.length
      console.log(queryParams)
      console.log(filteredJobs)
      const paginatedJobs = getPaginatedJobs(filteredJobs, queryParams)
      if (totalJobsCount) {
        return { jobs: paginatedJobs, jobsCount: totalJobsCount }
      }
      return getResponseError(HttpStatusCode.NOT_FOUND, 'jobs not found')
    })
    this.get('jobs/:id', (schema, { params }) => {
      const job = this.schema.find('job', params.id)
      return job ?? getResponseError(HttpStatusCode.NOT_FOUND, 'job not found')
    })
  },
  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
