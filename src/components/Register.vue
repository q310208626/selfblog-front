<script>
</script>
<template>
    <div class="register-area">
        <form id="register-form">
            <h2 id="register-header">{{ $t('message.registbtn') }}</h2>
            <div>
                <label>{{ $t("message.username") }}</label>
                <input type="text" id="username">
            </div>
            <div>
                <label>{{ $t("message.password") }}</label>
                <input type="password" id="userpwd">
            </div>
            <div>
                <label>{{ $t("message.passwordConfirm") }}</label>
                <input type="password" id="userpwdConfirm">
            </div>
            <div id="registbtn">
                <button type="submit" id="register-btn">{{ $t("message.registbtn") }}</button>
                <router-link to="/login">
                    <button id="login-btn">{{ $t("message.loginbtn") }}</button>
                </router-link>
            </div>
        </form>
    </div>
</template>
<style scoped>
#register-header {
    text-align: center;
    margin: 25px;
    color: #333333;
}

.register-area {
    height: 100vh;
    background: url('@/assets/image/login-bg.png');
    background-size: cover;
}
#register-form {
    width: 400px;
    display: block;
    background-color: rgba(219, 140, 75, 0.605);
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    backdrop-filter: blur(5px);
}

#register-form div {
    margin-bottom: 5px;
}

#register-form div input {
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: none;
    outline:none;
    border-bottom: 2px solid black;
    background: transparent;
    padding: 5px;
    font-size: 1.2em;
}

#register-form div input:hover {
    background-color: rgba(176, 89, 45, 0.605);
}

#registbtn {
    display: flex;
    justify-content: space-between;
}

#registbtn button {
    width: 49%;
    font-weight: 800;
    color: white;
    border: none;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(209, 52, 41, 0.841);
}

#registbtn a {
    width: 49%;
    font-weight: 800;
    color: white;
    border: none;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(209, 52, 41, 0.841);
}

#registbtn a button {
    width: 100%;
}

#registbtn button:hover {
    color: black;
}

#registbtn button:active {

    background-color: rgba(165, 41, 32, 0.841);
}
</style>