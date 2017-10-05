<template>
    <div class="loading" v-show="loadingQueue > 0"  v-loading="loadingQueue > 0">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters([
      'loadingQueue'
    ])
  }
}
</script>

<style>
.loading {
    position: absolute;
    height: 100%;
    width: 100%;
}
.el-loading-mask {
    background-color: rgba(255, 255, 255, .5);
}
</style>