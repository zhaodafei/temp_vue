<template>
  <div id="index">
    <div style="color: red"><h3>我是mobilePage页</h3></div>
    <div class="main-url">
      <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
      <router-link tag="button" :to="{ path: 'mobile-study01' }">组件测试</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mobile-index"
    }
</script>

<style scoped>

</style>