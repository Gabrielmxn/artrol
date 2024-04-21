import axios from "axios";


export const api = axios.create({
    baseURL: "https://order.drcash.sh/v1/order"
})