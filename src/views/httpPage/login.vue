<template>
    <el-container>
        <el-main>
            <h2>大飞图书-登录系统</h2>
            <div class="main-url">
                <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
                <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link><br/><br/><br/>
            </div>
            <div class="el-container">
                <div class="title">
                    <p class="h1"></p>
                </div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-ruleForm" size="medium">
                    <!--<div class="img-header">-->
                    <!--<span>登录系统</span>-->
                    <!--</div>-->
                    <el-form-item prop="mobile"> <!--请输入您的账号 -->
                        <span>账号</span>
                        <el-input v-model.trim="ruleForm.mobile" class="input" auto-complete="off" size="large" placeholder="请输入您的账号"></el-input>
                    </el-form-item>
                    <el-form-item property="password"> <!--请输入您的密码-->
                        <span>密码</span>
                        <el-input type="passworld" class="input" @keyup.enter.native="submitForm('ruleForm')" v-model.trim="ruleForm.password" auto-complete="off" size="large" placeholder="请输入您的密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="" type="primary" @click="submitForm('ruleForm')" size="large" :loading="loginLoading">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            
        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "login",
        data(){
            var validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callbacks) => {
                if (value === '') {
                    callbacks(new Error('请输入密码'));
                } else {
                    callbacks();
                }
            };
            return {
                checked: true,
                loginLoading: false,
                ruleForm: {
                    mobile: '12345678912',
                    password: '123456'
                },
                rules: {
                    mobile: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                    password: [
                        {validation: validatePass, trigger: 'blur'}
                    ]
                }
            };
        },
        mounted(){
            this.getSession();
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid)=>{
                    if (valid) {
                        this.submitData();
                    } else {
                        // console.log('error submint!');
                        return false;
                    }
                })
            },
            submitData() {
                this.loginLoading = true;
                this.$post('user/login', {
                    account_name: this.ruleForm.mobile,
                    password: this.ruleForm.password
                }).then(res => {
                    if (res) {
                        if (res.error === 0) {
                            let user = {
                                authorization: res.data.token_type + ' ' + res.data.access_token,
                                username: this.ruleForm.mobile,
                                password: this.ruleForm.password,
                            };
                            sessionStorage.setItem('user', JSON.stringify(user));

                            this.$router.push({path: '/http-book-index'}); // 提交后的跳转地址
                        } else {
                            this.loginLoading = false;
                            console.log("登录失败");
                            this.$message({
                                message: res.msg,
                                type: 'error',
                                showClose: true
                            });
                            this.loginLoading = false;
                        }
                    }
                })
            },
            getSession(){
                let user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    this.ruleForm.mobile = user.username;
                    this.ruleForm.passworld=user.passworld
                }
            }
        }
    }
</script>

<style scoped>

</style>