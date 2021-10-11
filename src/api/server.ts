import {
  Response,
  createServer,
  Model
} from 'miragejs'

import { jobsList } from './mocks'

createServer({
  models: {
    job: Model
  },
  routes() {
    this.namespace = 'api'
    this.get('/jobs', (schema, request) => {
      const serverJobsList = schema.all('job').models
      const serverJobsCount = serverJobsList.length
      return { jobs: serverJobsList, jobsCount: serverJobsCount } ?? new Response(404)
    })
    this.get('jobs/:id', (schema, request) => {
      const job = this.schema.find('job', request.params.id)
      return job ?? new Response(404)
    })
  },
  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
