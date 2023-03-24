import axios from 'axios'
import { BASE_URL } from '../config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000
})

instance.interceptors.request.use(
    (req) => {
        if (localStorage.getItem('token')) {
            req.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
                'token'
            )}`
        }
        return req
    },
    (err) => {
        debugger
        return Promise.reject(err)
    }
)

const getRequest = (API, body) => instance.get(API, body)
const postRequest = (API, body) => instance.post(API, body)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRequest,
    postRequest
}
