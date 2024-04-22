import axios from "axios";


export const api = axios.create({
    baseURL: "https://affiliate.drcash.sh/v1/order"
})