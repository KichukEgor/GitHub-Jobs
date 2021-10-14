import { createServer, Model } from 'miragejs'

import { jobsList } from './mocks'

import {
  getFilteredJobs,
  getPaginatedJobs,
  getResponseError,
  HttpStatusCode
} from './utils'

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
      console.log('filteredJobs', filteredJobs)
      const paginatedJobs = getPaginatedJobs(filteredJobs, queryParams)
      return { jobs: paginatedJobs, jobsCount: totalJobsCount } ?? getResponseError(HttpStatusCode.NOT_FOUND)
    })
    this.get('jobs/:id', (schema, { params }) => {
      const job = this.schema.find('job', params.id)
      return job ?? getResponseError(HttpStatusCode.NOT_FOUND)
    })
  },
  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
