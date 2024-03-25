<script setup lang="ts">
import {ref} from 'vue'
import i18nMessage from '@/i18n/i18nMessage';  

const { t } = i18nMessage.global;
let userInfo = ref(t('message.home.username'))
let loginTip = ref(t('message.home.loginTip'));

let usertoken = localStorage.getItem('usertoken')
</script>

<template>
    <header>
        <nav>
            <div class="nav-roolbar-left">
                <div class="homePage">
                    <a href="/home">SelfBlog</a>
                </div>
                <ul class="navigates">
                    <li>{{ $t("message.home.nav.homepage") }}</li>
                    <li>{{ $t("message.home.nav.homepage") }}</li>
                </ul>
            </div>

            <div class="nav-toolbar-right">
                <div>
                    <button class="new-article-btn">新文章</button>
                </div>
                <div class="user">
                    <div class="username">{{ userInfo }}</div>
                    <div class="loginbtn">
                        <router-link to="/login">{{ loginTip }}</router-link></div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    height: 56px;
    
}

header nav {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
    height: 56px;
    background-color: rgb(252, 186, 87);
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1999;
}


header .homePage a {
    display: flex;
    height: 56px;
    align-items: center;
    margin-left: 8px;
    font-size: 1.5em;
    color: tomato;
    cursor: pointer;
    text-decoration: none;
}

header .nav-roolbar-left {
    display: flex;
}

header .nav-roolbar-left .navigates {
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
}

header .nav-roolbar-left .navigates li {
    padding: 8px;
}

header .nav-roolbar-left .navigates li:hover {
    padding: 8px;
    background-color: rgb(221, 163, 77);
}


header .user {
    display: flex;
    align-items: center;
    height: 56px;
    margin: 0 10px;
}

header li {
    list-style: none;

    height: 56px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

header .user div {
    margin: auto 8px;
    cursor: pointer;
}

header .username {
    color: blue;
}

header .nav li:hover {
    background-color: rgb(185, 178, 169);
}

header li a {
    font-size: 1.2em;
}

header .nav-toolbar-right {
    display: flex;
    align-items: center;
}

header .nav-toolbar-right .new-article-btn{
    font-weight: bold;
    padding: 8px;
    border-radius: 20px;
    background-color: #ff63474d;
    cursor: pointer;
} 

.loginbtn a {
    text-decoration: none;
    color: black;
}
</style>