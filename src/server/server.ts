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
      if (request.queryParams.description) {
        return schema.jobs.all().filter((item: { description: string }) => item.description.includes(request.queryParams.description))
      }
      return schema.jobs.all()
    })
  },

  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
