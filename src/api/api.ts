import axios from 'axios'
import { TGetJobsPayload } from '../store/jobs-list/actions'

export const api = axios.create({
  baseURL: 'api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function fetchJobsList(queryData: TGetJobsPayload) {
  const { data } = await api.get('/jobs', { params: queryData })
  return data
}

export async function fetchJobDescription(payload: string) {
  const { data } = await api.get(`/jobs/${payload}`)
  return data.job
}
