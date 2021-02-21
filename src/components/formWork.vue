<template>
    <div id="">
        <h4>这里是表单操作事件处理</h4>
        <v-form-content ref="form"  :arrForm="arrForm" @priceClick="priceClick"></v-form-content>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Antd, { message,Select } from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css'
    import vFormContent from '../components/formContent'

    Vue.use(Antd);
    
    export default {
        name: "formWork",
        components:{
            vFormContent
        },
        props:{
            arrForm: {
                type: Array,
                required: true,
                default() {
                    return [
                        {handleClick:test},
                    ]
                }
            }
        },
        methods:{
            priceClick() {
                console.log("我是点击事件");
            },
        }
    }
</script>

<style scoped>

</style>