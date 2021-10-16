export type TGetJobsPayload = {
    id?:string | number,
    description?:string,
    type?:string,
    location?:string,
    page?: string | number,
    limit?: string | number
}
