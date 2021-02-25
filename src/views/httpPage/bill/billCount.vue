<template>
    <div>
        <div><h3 style="color: red">我是统计 Add 页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/http-bill-count-list' }">返回统计列表</router-link>
        </div>
        <br><br>
        <div>
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form-wrapper" :form="form">
                <a-form-item label="购买时间">
                    <a-range-picker v-decorator="consumeTime" :format="dateFormat" />
                </a-form-item>
                <a-form-item label="消费途径">
                    <a-radio-group v-decorator="consumeWay">
                        <a-radio value="所有">所有</a-radio>
                        <a-radio value="线上">线上</a-radio>
                        <a-radio value="线下">线下</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :wrapper-col="wrapperColItem">
                    <a-button type="primary" @click="handleReset">重置</a-button>
                    <a-button type="primary" @click="handleSubmit" :style="{ marginLeft: '8px' }">提交</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    /* 这是ant-design-vue */
    import Vue from 'vue'
    import Antd from 'ant-design-vue'  //这是ant-design-vue
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    /* 这是ant-design-vue */
    
    export default {
        name: "billCount",
        data() {
            return {
                form: this.$form.createForm(this),// form 表单
                labelCol: {xs: { span: 24 }, sm: { span: 5 },},
                wrapperCol: {xs: { span: 24 }, sm: { span: 12 },},
                wrapperColItem: { span: 14, offset: 8 },
                dateFormat: "YYYY-MM-DD",
                consumeWay: ['consumeWay', {initialValue: '所有', rules: [{required: true, message: '消费途径'}]}],
                consumeTime: ['consumeTime', {rules: [{ type: 'array', required: true, message: '请选择时间!' }]}],
            };
        },
        mounted() {
            // this.form.setFieldsValue({
            //     'consumeTime': this.$moment(this.lastConsumeTime)
            // });
        },
        methods:{
            handleSubmit() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        let params = {
                            consumeWay: fieldsValue.consumeWay,
                            startTime: fieldsValue.consumeTime[0].format(this.dateFormat),
                            endTime: fieldsValue.consumeTime[1].format(this.dateFormat),
                        };
                        
                        this.$post(this.$interfaces.billCountAdd, params).then(res=>{
                            if (res.error === 0) {
                                this.$router.push({path: '/http-bill-count-list', query: {tipMsg: '图书添加成功'}});
                            } else {
                                this.$message.warning("添加失败");
                            }
                        });
                    }
                })
            },
            handleReset() {
                this.form.resetFields();
            }
        }
    }
</script>

<style scoped>

</style>