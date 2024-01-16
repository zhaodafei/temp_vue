<template>
    <div id="index">
        <div style="color: red"><h3>我是generalPage页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/general-study01' }">组件测试</router-link>
        </div>
      <div style="margin-top: 10px">
        <ul>
          <li class="main-li"> <router-link tag="button" :to="{ path: '/general-study02' }">element-ui 测试</router-link></li>
          <li class="main-li"> <router-link tag="button" :to="{ path: '/general-study03' }">Vue + echarts4.9 基本地图</router-link></li>
          <li class="main-li"> <router-link tag="button" :to="{ path: '/general-study04' }">echarts4 全国地图</router-link></li>
          <li class="main-li"> <router-link tag="button" :to="{ path: '/general-study05' }">开发test</router-link></li>
          <li class="main-li"> <router-link tag="button" :to="{ path: '/general-study06' }">开发test</router-link></li>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.main-li{
  margin-top: 5px;
}
</style>
