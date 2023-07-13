import axios from "axios";
const BASE_URL ="http://localhost:5000/api/";
if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser!=null){
    var Token  = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
}
else{
    var Token  = ""
}


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