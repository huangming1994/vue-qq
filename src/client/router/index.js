import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../pages/Login.vue'
import Regist from '../pages/Regist.vue'
import ForgetPwd from '../pages/Forget_pwd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/forget_pwd',
      name: 'forget_pwd',
      component: ForgetPwd
    }
  ],
  mode: 'history'
})
