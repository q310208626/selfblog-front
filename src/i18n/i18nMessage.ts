import { createI18n  } from 'vue-i18n'


const messages = {
    en:{
        message:{
            username:'Username',
            password:'Password',
            passwordConfirm:'Password Confirm',
            forgetpwd:'Forget Password?',
            loginbtn:'Login',
            registbtn:'Regist',
        }
    },
    zh:{
        message:{
            username:'用户名',
            password:'密码',
            passwordConfirm:'密码确认',
            forgetpwd:'忘记密码?',
            loginbtn:'登录',
            registbtn:'注册'
        }
    }
}

const i18nMessage = createI18n({
    locale: 'zh',
    fallbackLocale: 'en', 
    messages // set locale messages
  });

export default i18nMessage