<script lang="ts" setup>
import { userLogin } from '@/api/api'


let username:string;
let userpwd:string;

function login() {
  console.debug(username,userpwd);
  userLogin(username,userpwd)
  // axios.post('/selfblog/login', { 'username': username, 'password': userpwd })
  //   .then((resp: any) => {
  //     console.log(resp.resultCode)
  //   })
  //   .catch((err: any) => {
  //     console.log(err)
  //   })
}
</script>
<template>
  <div class="login-area">

    <form id="login-form">
      <h2 id="login-header">{{ $t('message.loginbtn') }}</h2>
      <div>
        <label>{{ $t("message.username") }}</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label>{{ $t("message.password") }}</label>
        <input type="password" id="userpwd" v-model="userpwd">
      </div>
      <div><a id="forget-pwd" href="#">{{ $t("message.forgetpwd") }}</a></div>
      <div id="loginbtn">
        <button type="submit" id="login-btn" @click="userLogin(username,userpwd)">{{ $t("message.loginbtn") }}</button>
        <router-link to="/register">
          <button id="regist-btn">{{ $t("message.registbtn") }}</button>
        </router-link>
      </div>
    </form>

  </div>
</template>

<style scoped>
#login-header {
  text-align: center;
  margin: 25px;
  font-size: 1.5em;
  color: #333333;
}

.login-area {
  height: 100%;
  background: url(@/assets/image/login-bg.png) no-repeat;
  background-size: cover;
}

#login-form {
  width: 400px;
  background-color: rgba(219, 140, 75, 0.605);
  border-radius: 20px;
  box-shadow: 2px 2px 2px grey;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 10px;
  backdrop-filter: blur(5px);

}

#login-form div {
  margin-bottom: 5px;
}

#login-form div input {
  height: 36px;
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.2em;
}

#login-form div input:hover {
  background-color: rgba(176, 89, 45, 0.605);
  ;
}

#login-form div label {
  margin-bottom: 2px;
}

#loginbtn {
  display: flex;
  justify-content: space-between;
}

#loginbtn button {
  background-color: rgba(209, 52, 41, 0.841);
  width: 49%;
  height: 30px;
  font-weight: bold;
  border: none;
  color: white;
  border-radius: 5px;
}

#loginbtn a {
  display: inline-block;
  background-color: rgba(209, 52, 41, 0.841);
  width: 49%;
  height: 30px;
  font-weight: bold;
  border: none;
  color: white;
  border-radius: 5px;
}

#loginbtn a button {
  width: 100%;
}

#loginbtn button:hover {
  color: black;
}

#loginbtn button:active {
  background-color: rgba(165, 41, 32, 0.841);
}

#forget-pwd {
  color: rgb(48, 43, 43);
  text-decoration: none;
  font-size: 0.8em;
}

#forget-pw:hover {
  color: rgb(184, 179, 179);
}
</style>