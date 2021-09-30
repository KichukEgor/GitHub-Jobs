/* eslint-disable */
import { createServer, Model } from 'miragejs'

import { jobsList } from '../static/mocks'

createServer({
  models: {
    movie: Model,
    job: Model
  },

  routes() {
    this.namespace = 'api'
    this.get('/jobs', (schema:any, request) => {
      /* TODO remove log */
      console.log(request.queryParams)
      const page = Number(request.queryParams.page)
      const limit = Number(request.queryParams.limit)
      const start = page * limit
      const end = start + limit
      const jobs = schema.jobs.all()
      const jobsCount = jobs.length
      const paginatedJobs = jobs.slice(start, end).models

      if (request.queryParams.description) {
        const filteredJobs = jobs.filter((item: { description: string }) => item.description.includes(request.queryParams.description)).models
        const filteredJobsCount = filteredJobs.length
        console.log(filteredJobs)
        return { jobs: filteredJobs, totalCount: filteredJobsCount }
      }
      return { jobs: paginatedJobs, totalCount: jobsCount }
    })
    this.get('/jobs/:id')
  },

  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
