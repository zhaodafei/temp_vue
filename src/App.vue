<!--<template>-->
  <!--<div id="app">-->
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--&lt;!&ndash;<HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
    <!--<aaaa msg="Welcome to Your Vue.js App"/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import bbbb from './components/HelloWorld.vue'-->

<!--export default {-->
  <!--name: 'app',-->
  <!--components: {-->
<!--//    HelloWorld-->
      <!--aaaa:bbbb-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->


<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

    export default {
        name: 'app'
    }
</script>

