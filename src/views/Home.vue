<template>
    <div id="home">
        <div style="color: red"><h3>我是Home首页</h3></div>
        <div class="main-url">
            <router-link :to="{ path: '/404',query: {username:'我是大飞'} }">404</router-link>
            <router-link tag="button" :to="{ path: '/HelloWorld' }">HelloWorld</router-link>
        </div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/general-index' }">非网络请求页面</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">HTTP网络请求页面</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  
</style>