import axios from "axios"

const API_URL = "https://e-commere-website-backend.onrender.com/"

export const api = axios.create({
    baseURL : API_URL,
    header : {
        "Content-Type" : "application/json"
    },
})