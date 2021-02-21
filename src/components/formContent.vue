<template>
    <div id="">
        <h5>这里是表单内容</h5>
        <a-form layout="inline">
            <a-form-item :label="item.nameLabel" :key="index" v-for="(item,index) in arrForm">
                <a-input placeholder="请输入" :disabled="item.disabled" @click="item.isActive?$emit(item.handleClick):''" />
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Antd, { message,Select } from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    
    export default {
        name: "formContent",
        props:{
            arrForm: {
                type: Array,
            },
        }
    }
</script>

<style scoped>

</style>