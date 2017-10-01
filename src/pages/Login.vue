<template class="login">
    <h1>{{ message }}</h1>
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