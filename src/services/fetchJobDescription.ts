import { api } from '../api/api'

export async function fetchJobDescription(payload: string) {
  const { data } = await api.get(`/jobs/${payload}`)
  return data.job
}
