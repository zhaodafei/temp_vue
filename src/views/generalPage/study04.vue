<template>
    <div>
        study444444444444444
      <demoEcharts></demoEcharts>
    </div>
</template>
<script>
import demoEcharts from '@/components/demoEcharts'
    /* 这是ant-design-vue */
    import Vue from 'vue'
    import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    /* 这是ant-design-vue */


    export default {
        components:{demoEcharts},
        data() {
            return {
                isShowFile:true, //是否展示文件,选择上传
            }
        },
        methods: {

        },
        watch: {

        },
    };
</script>

<style scoped>

</style>
