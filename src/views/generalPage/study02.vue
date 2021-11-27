<template>
    <div>
        ddddddddddddddddd  <el-button type="primary">主要按钮</el-button>
    </div>
</template>
<script>

    /* 这是ant-design-vue */
    // import Vue from 'vue'
    // import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
    // import 'ant-design-vue/dist/antd.css'
    // Vue.use(Antd);
    /* 这是ant-design-vue */

    /* 这是ElementUI */
    import Vue from 'vue'
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);
    /* 这是ElementUI */


    export default {
        components:{},
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
