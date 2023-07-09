import axios from "axios";
const BASE_URL ="http://localhost:5000/api/";
const Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE2OGYzYzUyYWQ5NjU3M2MyZjZmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODkxMTY5NSwiZXhwIjoxNjg5MTcwODk1fQ.V1JHpAXiDi5cW9pG4tEMZ8W4MAU_0cecediufMSiOVo"
export const publicRequest = axios.create(
    {
        baseURL:BASE_URL,
    }
);
export const userRequest = axios.create(
    {
        baseURL:BASE_URL,
        header:{token:`Bearer ${Token}`},
    }
);