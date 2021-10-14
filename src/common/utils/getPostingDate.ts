import { formatDistance } from 'date-fns'

const getPostingDate = (created_at: string) =>
  formatDistance(Date.parse(created_at), new Date(), { addSuffix: true })

export default getPostingDate
