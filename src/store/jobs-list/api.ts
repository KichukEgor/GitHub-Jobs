import { AxiosRequestConfig } from 'axios'
import { api } from '../../core/api/api'

export async function fetchJobsList(payload: AxiosRequestConfig) {
  const { data } = await api.get('/jobs?page=1&limit=5', { params: payload })
  return data
}
