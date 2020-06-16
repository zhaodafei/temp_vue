<template>
    <div id="index">
        <div style="color: red"><h3>我是httpPage页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/detail01' }">图书详细</router-link>
        </div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/http-login' }">登录</router-link>
            <router-link tag="button" :to="{ path: '/http-login' }">退出登录</router-link>
            <router-link tag="button" :to="{ path: '/http-book-index' }">已经登录--进入图书列表</router-link>
            <router-link tag="button" :to="{ path: '/http-book-add' }">已经登录--进入图书添加</router-link>
        </div>
        <div>
            <p>用户登录: {{ base_url }}user/login </p>
            <p>数据获取地址: {{ base_url }}book/list?per_page=6 </p>
            <p>数据添加地址: {{ base_url }}book/add </p>
            <p>数据详情地址: {{ base_url }}book/detail?id=3 </p>
            <p>数据删除地址: {{ base_url }}book/del?id=5 </p><br>
            <p>免登陆数据详情地址: {{ base_url }}user/detail?id=3 </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                base_url:"",
            }
        },
        mounted(){
            this.base_url = process.env.VUE_APP_BASE_URL;
        },
    }
</script>

<style scoped>

</style>