import $host from "./index";

const key = process.env.REACT_APP_API_KEY

export const fetchCurrency = async () => {
    return await $host.get(`/currencies?key=${key}`)
}
export const fetchRates = async () => {
    return await $host.get(`/rates?key=${key}`)
}
