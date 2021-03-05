<template>
    <div>
        <div><h3 style="color: red">我是商品 Add 页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/http-bill-index' }">返回账单列表</router-link>
        </div>
        <br><br>
        <div>
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form-wrapper" :form="form">
                <a-form-item label="商品名称">
                    <a-input placeholder="请输入" v-decorator="goodsName"></a-input>
                </a-form-item>
                <a-form-item label="单价">
                    <a-input-number placeholder="请输入" v-decorator="unitPrice"></a-input-number>
                </a-form-item>
                <a-form-item label="数量">
                    <a-input-number placeholder="请输入" v-decorator="goodsNumber"></a-input-number>
                </a-form-item>
                <a-form-item label="消费途径">
                        <a-radio-group v-decorator="consumeWay">
                            <a-radio value="线下">线下</a-radio>
                            <a-radio value="线上">线上</a-radio>
                        </a-radio-group>
                </a-form-item>
                <a-form-item label="备注">
                    <a-input placeholder="请输入" v-decorator="goodsComment"></a-input>
                </a-form-item>
                <a-form-item label="购买时间">
                    <a-date-picker placeholder="请选择" v-decorator="consumeTime" show-time :format="dateFormat"></a-date-picker>
                </a-form-item>
                
                <a-form-item :wrapper-col="wrapperColItem">
                    <a-button @click="handleReset">重置</a-button>
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
        name: "billAdd",
        data() {
            return {
                form: this.$form.createForm(this),// form 表单
                labelCol: {xs: { span: 24 }, sm: { span: 5 },},
                wrapperCol: {xs: { span: 24 }, sm: { span: 12 },},
                wrapperColItem: { span: 14, offset: 8 },
                dateFormat: "YYYY-MM-DD HH:mm:ss",
                // goodsName: ['goodsName', {initialValue:"西瓜xxx", rules: [{required: true, message: '商品名称'}]}],
                goodsName: ['goodsName', {rules: [{required: true, message: '商品名称'}]}],
                unitPrice: ['unitPrice', {rules: [{required: true, message: '单价'}]}],
                goodsNumber: ['goodsNumber', {initialValue: 1,rules: [{required: true, message: '数量'}]}],
                consumeWay: ['consumeWay', {rules: [{required: true, message: '消费途径'}]}],
                goodsComment: ['goodsComment', {initialValue: '无', rules: [{required: true, message: '备注'}]}],
                consumeTime: ['consumeTime', {rules: [{ type: 'object', required: true, message: '请选择时间!' }]}],
                lastConsumeTime: "",
                lastConsumeWay: "",
            };
        },
        created() {
        },
        mounted() {
            if (sessionStorage.getItem("lastDataSourceOne")) {
                let lastDataSourceOne = JSON.parse(sessionStorage.getItem("lastDataSourceOne"));
                this.form.setFieldsValue({
                    'consumeTime': this.$moment(lastDataSourceOne.consumeTime),
                    'consumeWay': lastDataSourceOne.consumeWay
                });
            }else {
                console.log(this.$moment());
                this.form.setFieldsValue({
                    'consumeTime': this.$moment(),
                    'consumeWay': "线下"
                });
            }
        },
        methods:{
            handleSubmit() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        let params = {
                            goodsName: fieldsValue.goodsName,
                            unitPrice: fieldsValue.unitPrice,
                            goodsNumber: fieldsValue.goodsNumber,
                            consumeWay: fieldsValue.consumeWay,
                            goodsComment: fieldsValue.goodsComment,
                            consumeTime: fieldsValue.consumeTime.format(this.dateFormat),
                        };
                        this.$post(this.$interfaces.goodsAdd, params).then(res=>{
                            if (res.error === 0) {
                                this.$router.push({path: '/http-bill-index', query: {tipMsg: '图书添加成功'}});
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
        },
        destroyed() {
            sessionStorage.removeItem('lastDataSourceOne');
        },
    }
</script>

<style scoped>

</style>