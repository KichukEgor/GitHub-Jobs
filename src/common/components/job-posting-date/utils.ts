import { formatDistance } from 'date-fns'

const getPastPeriod = (createdDate:string) => (
  formatDistance(Date.parse(createdDate), new Date(), { addSuffix: true })
)

export default getPastPeriod
