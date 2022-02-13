import axios from 'axios'

export  const ConfigBaseURL = 'http://localhost:8888/test'
const request = axios.create({
    baseURL: ConfigBaseURL
    // proxy: {
    //     host: '127.0.0.1',
    //     port: 10809
    // }
})


/*request.interceptors.request.use(config => {

    // config.headers.authorization = window.localStorage.getItem("token")

    return config;
})*/
/*request.interceptors.response.use(res => {
if(res.statusCode===200)
        return config.data;
    }
)*/
export default request
