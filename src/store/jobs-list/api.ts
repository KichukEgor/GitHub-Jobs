import {api} from "../../core/api";

export async function fetchJobsList() {
    const {data} = await api.get('/jobs')
    return data
}