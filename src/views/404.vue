<template>
    <div id="404">
        <div style="color: red"><h3>404 page not found</h3></div>
        <div class="main-url">
            <router-link tag="button"  :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/HelloWorld' }">HelloWorld</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-404"
    }
</script>

<style scoped>
    .main-url{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 25%;
        margin-top: 10px;
    }
</style>
