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

            home: {
                username:'tourist',
                loginTip:'Login',
                nav:{
                    homepage:'HomePage',
                }
            }
        }
    },
    zh:{
        message:{
            username:'用户名',
            password:'密码',
            passwordConfirm:'密码确认',
            forgetpwd:'忘记密码?',
            loginbtn:'登录',
            registbtn:'注册',
            home: {
                username:'游客',
                loginTip:'登录',
                nav:{
                    homepage:'首页',
                }
            }
        }
    }
}

const i18nMessage = createI18n({
    locale: 'zh',
    fallbackLocale: 'en', 
    messages // set locale messages
  });

export default i18nMessage