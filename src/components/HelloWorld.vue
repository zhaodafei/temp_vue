<template>
  <div class="hello">
    <div style="color: red"><h3>{{ msg }}</h3></div>
    <div class="main-url">

      <router-link tag="button" :to="{ path: '/404',query: {username:'我是大飞'} }">404</router-link>
      <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: "HelloWorld components"
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-url {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25%;
    margin-top: 10px;
  }
</style>
