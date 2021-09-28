export type TJob = {
  id: string;
  type: string;
  url: string;
  // eslint-disable-next-line camelcase
  created_at: string;
  company: string;
  // eslint-disable-next-line camelcase
  company_url: string;
  location: string;
  title: string;
  description: string;
  // eslint-disable-next-line camelcase
  how_to_apply: string;
  // eslint-disable-next-line camelcase
  company_logo: string;
}

export type TJobState = {
  jobsList: null | TJob[]
}
