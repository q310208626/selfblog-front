import axios from "axios"

const header = { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" };

const instance = axios.create({
    baseURL:'http://localhost:8080',
    timeout:5000,
    headers:header
})


export const userLogin = (usrname: String, userpwd: String) => {
    return instance.post('selfblog/authticate', { "username": usrname, "password": userpwd })
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}