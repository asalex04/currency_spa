import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_CURRENCY_API_URL
})

export default $host
