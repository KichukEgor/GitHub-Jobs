import { createServer } from 'miragejs'

import db from '../db/db.json'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/jobs', () => db)
  }
})
