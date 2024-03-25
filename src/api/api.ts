import axios, { HttpStatusCode } from "axios"
import router from "@/router/index";

const header = { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" };

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: header
})

export function userLogin(usrname: String, userpwd: String):void {
    instance.post('selfblog/authticate', { "username": usrname, "password": userpwd })
        .then((res) => {
            console.log(res.data)
            if (res.status == HttpStatusCode.Ok) {
                if (res.data && res.data.authResult  === 'true') {
                    console.log(res.data)
                     localStorage.setItem('usertoken',res.data.usertoken)
                    router.push('/articleDetails')
                } else {
                    alert('username or password error!');
                }
            }

        }).catch((err) => {
            console.log(err)
        })
}