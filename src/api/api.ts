import axios from 'axios'

export const api = axios.create({
  baseURL: 'api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000000
})

export async function fetchJobDescription(payload: string) {
  const { data } = await api.get(`/jobs/${payload}`)
  return data.job
}
