import { api } from '../api/api'
import { TQueryParams } from '../common/models/queryParams'

export async function fetchJobsList(payload: TQueryParams) {
  const { data } = await api.get('/jobs', { params: payload })
  return data
}
