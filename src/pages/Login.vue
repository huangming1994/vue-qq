<template>
    <div class="login">
        <div class="top">
            <i class="iconfont iconfont-qq"></i>
            <span>QQ</span>
        </div>
        <div class="form">
            <input type="text" name="account" placeholder="QQ号/手机号/邮箱">
            <br>
            <input type="password" name="password" placeholder="密码">
            <br>
            <button type="button">登录</button>
            <div class="operate_btn">
                <router-link to="/" class="forget_pwd">忘记密码？</router-link>
                <router-link to="/" class="regist">新用户注册</router-link>
            </div>
        </div>
        <div class="footer">
            <p>登录即代表阅读并同意<router-link to="/" class="clause">服务条款</router-link></p>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'login',
    data () {
      return {
        message: 'login'
      }
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
</style>