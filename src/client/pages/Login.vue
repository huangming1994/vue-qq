<template>
    <div class="login">
        <div class="top">
            <i class="iconfont iconfont-qq"></i>
            <span>QQ</span>
        </div>
        <div class="form">
            <input type="text" name="username" placeholder="QQ号/手机号/邮箱" v-model="username">
            <br>
            <input type="password" name="password" placeholder="密码" v-model="password">
            <br>
            <el-button type="primary" @click="login">登录</el-button>
            <div class="operate_btn">
                <router-link to="/forget_pwd" class="forget_pwd">忘记密码？</router-link>
                <router-link to="/regist" class="regist" @click="regist">新用户注册</router-link>
            </div>
        </div>
        <div class="footer">
            <p>登录即代表阅读并同意<router-link to="/" class="clause">服务条款</router-link></p>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { mapActions } from 'vuex'
  import { Message } from 'element-ui'
  import { regist } from '../api'

  export default Vue.extend({
    name: 'login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (!this.username) {
          Message({ message: '请输入账号。' })
          return
        }
        if (!this.password) {
          Message({ message: '请输入密码。' })
          return
        }
        this.SET_USER_INFO({ username: this.username, password: this.password })
      },
      regist: async function() {
        await regist(this.username, this.password)
      },
      ...mapActions([
        'SET_USER_INFO'
      ])
    }
  })
</script>
<style>
.login {
  width: 100%;
  height: 100%;
  padding: 0 8%;
  position: relative;
  background: url('../images/qq_login-bg.jpeg') no-repeat;
  background-size: cover;
  overflow: hidden;  /* 创建BFC解决Margin Collapse */
}
.top {
    margin-top: 25%;
    text-align: left;
}
.top span {
    color: #fff;
    font-size: 30px;
}
.top i {
    font-size: 35px;
    color: #fff;
}
.form {
    margin-top: 15%;
}
.form input {
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #fff;
    background-color: transparent;
    border-bottom:1px solid #999;
}
input[type="text"] {
    margin-bottom: 10px;
}
.form button {
    width: 100%;
    height: 40px;
    margin: 35px 0 10px;
    font-size: 16px;
    color: #fff;
    background-color: rgba(42,167,222, .9);
}
input::-webkit-input-placeholder {
    color: #333;
}
.operate_btn {
    display: flex;
    justify-content: space-between;
}
.forget_pwd, .regist {
    color: rgba(42,167,222, .9);
    font-size: 14px;
}
.footer {
    position: absolute;
    bottom: 8%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #fff;
}
.footer .clause {
    color: rgba(42,167,222, .9);
}
.el-message {
    width: 100%;
    top: 0;
}
</style>