/* import {
  Response,
  Server,
  JSONAPISerializer,
  createServer,
  Model,
  belongsTo,
  hasMany,
  Factory,
  Registry
} from 'miragejs'
import Schema from 'miragejs/orm/schema';
import { jobsList } from './mocks'

const JobModel = Model.extend({
  attr: 'text',
})

const JobFactory = Factory.extend({
  attr: 'text',
})

declare const schema: Schema<
  Registry<{ foo: typeof JobModel }, { foo: typeof JobFactory }>
>

createServer({
models: {
job: Model.extend({
  id: 'text',
  description: 'text'
})
},
  routes() {
    this.get('/jobs', (schema: Schema<
        Registry<{ job: typeof JobModel }, { job: typeof JobFactory }>
        >, request) => {
      const job = this.schema.find('job', request.params.id);
      /!* if (request.queryParams.description) {
        const searchedJob = jobs.find((item: { id: string }) => item.id === request.queryParams.id)
        return searchedJob
      } *!/
      return job
    })
    this.get('jobs/:id', (schema, request) => {
      const job = this.schema.find('job', request.params.id)
      return job ?? new Response(404)
    })
  },
  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
}) */
import { createServer, Model } from 'miragejs'

import { jobsList } from './mocks'

createServer({
  models: {
    job: Model
  },
  routes() {
    this.namespace = 'api'
    // TODO: Прописать типизацию схемы
    this.get('/jobs', (schema: any, request) => {
      console.log(schema)
      // TODO: Рефакторинг логики. Как минимум разделить на логику для фильтрации по параметрам и логику по пагинации
      const page = Number(request.queryParams.page)
      const limit = Number(request.queryParams.limit)
      const start = page * limit
      const end = start + limit
      const jobs = schema.jobs.all().models
      const jobsCount = jobs.length
      const paginatedJobs = jobs.slice(start, end)

      if (request.queryParams.description) {
        const filteredJobs = jobs.filter(
          (item: { description: string }) => item.description.includes(request.queryParams.description)
        ).models
        const filteredJobsCount = filteredJobs.length
        console.log(filteredJobs)
        return { jobs: filteredJobs, totalCount: filteredJobsCount }
      }
      if (request.queryParams.id) {
        const searchedJob = jobs.find((item: { id: string }) => item.id === request.queryParams.id)
        return searchedJob
      }
      return { jobs: paginatedJobs, totalCount: jobsCount }
    })
    this.get('/jobs/:id')
  },

  seeds(server) {
    jobsList.forEach((item) => server.create('job', item))
  }
})
