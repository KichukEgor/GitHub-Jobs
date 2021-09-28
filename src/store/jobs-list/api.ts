import { api } from '../../core/api/api'

export async function fetchJobsList() {
  const { data } = await api.get('/jobs')
  return data
}
