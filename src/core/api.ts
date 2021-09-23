import axios from 'axios'

export const api = axios.create({
    baseURL: 'api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000000
})