<template>
  <div id="app">
    <loading></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Loading from '@/components/Loading'
export default Vue.extend({
    name: 'app',
    components: {
      Loading
    }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  user-select: none;
  text-size-adjust: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Microsoft Yahei' !important;
}
@font-face {
  font-family: "iconfont";
  src: url('./font/iconfont.eot?t=1506878385674'); /* IE9*/
  src: url('./font/iconfont.eot?t=1506878385674#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWIAAsAAAAAB/gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFZW70gtY21hcAAAAYAAAABdAAABhpnkBr5nbHlmAAAB4AAAAboAAAHo9idzf2hlYWQAAAOcAAAALwAAADYPFs1eaGhlYQAAA8wAAAAeAAAAJAfnA8pobXR4AAAD7AAAAAwAAAAMDC8AAGxvY2EAAAP4AAAACAAAAAgAdgD0bWF4cAAABAAAAAAfAAAAIAESAF5uYW1lAAAEIAAAAUUAAAJtPlT+fXBvc3QAAAVoAAAAHwAAADByhHoIeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkEWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp5pMzf8b2CIYW5gaAQKM4LkANujC7EAeJzFkMENgDAMAy9t6QMxCFIZiBdzdOKuUUwoDyaoJceKYylRgAWI4iEmsAvjwSnX3I+s7ifPZKkRqK30rv5TRTTLrkElMw02b/Ufm9d9dPoKdVAntvKScAO8Rww7AAAAeJwlj89r1EAcxec7yUySbn5MZjIzSfb3rt3R1kYa06Sg3T3YFipCK0sPoqKCV3vtRXAvggcP/gUeRPDoP9C/wv9A9L8QtgZ9PB6Pd3ofRBC6/mldWSkS6CbaRYfoDCGg2zAJcR/GpirwNsgxkToJLTM1Y2c6KawD0BOaqLKuZpo6NIIQBnB3XNamwAb2qjm+B6XqA2TdfMk3e9z6BBupGbxfP8RfQA6nvWi+sz65vUjKkXAvfc4zzj+6lBAXYzsK4Y1WHvE26PoriXJ5NbyFh+BnJn/0JBh1+asP1UV/U3sAqxWI7ij8tojzuPXbXAmeOSxw0zyY3kjg8ncnFX5/9gu1gpb1ne1ZK/QYIRGCQ5Uu66ZetOeHLYJMNJUtR7sprZr/rTL1XjUzzRyaROkBtMUUYP7lHaixsbGWM6pp8j04ZFEc+X6HBQEuUlvmtoDnx/vLOOZZGi+b42dY2H3t5DvAwrhHXRXJ+w6m1GEEOhd/rtFLn0jM4LP/dP/oHAedkHHyIrNoxlyHidFWTwMA1t2tkWCOG2eUDl4TGMSCUef86MEp8Xa1UDZRUEi1/iEtzA0cIPQXrdlB4gAAeJxjYGRgYADiZpOFU+L5bb4ycLMwgMDV7y4bEfT/ehZO5gYgl4OBCSQKAD68CzcAeJxjYGRgYG7438AQw+LGAAQsnAyMDKiAGQBOigK7AAAEAAAAA+kAAARGAAAAAAAAAHYA9HicY2BkYGBgZghiYGUAASYg5gJCBob/YD4DABEQAXEAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAmZGJkZmRhYGxgqmwkIEBAAi8AXkA') format('woff'),
  url('./font/iconfont.ttf?t=1506878385674') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./font/iconfont.svg?t=1506878385674#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont-qq:before { content: "\e62b"; }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
/*@media screen and (min-width: 769px) {*/
  /*body{*/
    /*box-shadow: 0 0 30px gray;*/
    /*margin:0 auto;*/
  /*}*/
  /*body,#app{*/
    /*width:440px*/
  /*}*/
/*}*/
a{
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
}
input{
  border: none;
  outline: none;
}
button{
  text-align: center;
  outline: none;
  border: none;
}
</style>
