<template>
    <div>
        <h2>大飞图书-登录系统</h2>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link><br/><br/><br/>
        </div>
        <br><br>
        <div>
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form-wrapper" :form="form">

                <a-form-item label="账号">
                    <a-input placeholder="请输入" v-decorator="userMobile"></a-input>
                </a-form-item>
                <a-form-item label="密码">
                    <a-input type="password" placeholder="请输入" v-decorator="userPassword"></a-input>
                </a-form-item>

                <a-form-item :wrapper-col="wrapperColItem">
                    <a-button type="primary" @click="handleSubmit" :style="{ marginLeft: '8px' }" :loading="loginLoading">登录</a-button>
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
        name: "login2",
        data() {
            return {
                form: this.$form.createForm(this),// form 表单
                labelCol: {xs: { span: 24 }, sm: { span: 5 },},
                wrapperCol: {xs: { span: 24 }, sm: { span: 12 },},
                wrapperColItem: { span: 14, offset: 8 },
                userMobile: ['userMobile', {initialValue: '12345678912', rules: [{required: true, message: '用户名'}]}],
                userPassword: ['userPassword', {initialValue: '123456', rules: [{required: true, message: '密码'}]}],
                loginLoading: false,
            }
        },
        methods:{
            handleSubmit() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        this.loginLoading = true;
                        let params = {
                            account_name: fieldsValue.userMobile,
                            password: fieldsValue.userPassword,
                        };
                        this.$post('user/login', params).then(res=>{
                            if (res) {
                                if (res.error === 0) {
                                    let user = {
                                        authorization: res.data.token_type + ' ' + res.data.access_token,
                                        username: fieldsValue.userMobile,
                                        password: fieldsValue.userPassword,
                                    };
                                    sessionStorage.setItem('user', JSON.stringify(user));

                                    this.$router.push({path: '/http-book-index'}); // 提交后的跳转地址
                                } else {
                                    this.loginLoading = false;
                                    this.$message.error("登录失败");
                                    this.loginLoading = false;
                                }
                            }
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>