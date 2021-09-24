import {api} from "../../core/api";

export async function fetchJobsList() {
    /*TODO*/
    const {data} = await api.get('/jobs',  { params: { company: 'SweetRush' } })
    return data
}