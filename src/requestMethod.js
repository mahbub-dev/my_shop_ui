import axios from "axios";

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZlYjdhMzRkOThhMjJkZjA3NzcwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjkyMDU5OCwiZXhwIjoxNjQ3MTc5Nzk4fQ.5_6ngtYHU1oIOp4mK0g3Q6jiUdoRu6HEgu2gXzWsO58"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer${TOKEN}`}
})