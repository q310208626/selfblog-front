import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n  } from 'vue-i18n'
import router from './router'
import i18nMessage from '@/i18n/i18nMessage'

const app = createApp(App);

// const messages = {
    // en:{
    //     message:{
    //         username:'Username',
    //         password:'Password',
    //         forgetpwd:'Forget Password?',
    //         loginbtn:'Login',
    //         registbtn:'Regist'
    //     }
    // },
    // zh:{
    //     message:{
    //         username:'用户名',
    //         password:'密码',
    //         forgetpwd:'忘记密码?',
    //         loginbtn:'登录',
    //         registbtn:'注册'
    //     }
    // }
// }

// const i18nMessage = createI18n({
//     locale: 'zh',
//     fallbackLocale: 'en', 
//     messages // set locale messages
//   });
app.use(i18nMessage)
.use(router)
.mount('#app')

