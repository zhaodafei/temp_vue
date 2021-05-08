<template>
    <div id="book-add">
        <div style="color: red"><h3>我是图书Add页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/http-book-index' }">返回图书列表</router-link>
        </div>
        <br><br>
        <div>
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form-wrapper" :form="form">

                <a-form-item label="图书名字">
                    <a-input placeholder="请输入" v-decorator="bookName"></a-input>
                </a-form-item>
                <a-form-item label="价格">
                    <a-input placeholder="请输入" v-decorator="bookPrice"></a-input>
                </a-form-item>
                <a-form-item label="作者">
                    <a-input placeholder="请输入" v-decorator="bookAuthor"></a-input>
                </a-form-item>

                <a-form-item :wrapper-col="wrapperColItem">
                    <a-button type="primary" @click="handleSubmit" :style="{ marginLeft: '8px' }" :loading="bookLoading">添加图书</a-button>
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
        name: "bookAdd",
        data() {
            return {
                form: this.$form.createForm(this),// form 表单
                labelCol: {xs: { span: 24 }, sm: { span: 5 },},
                wrapperCol: {xs: { span: 24 }, sm: { span: 12 },},
                wrapperColItem: { span: 14, offset: 8 },
                bookName: ['bookName', {initialValue: 'web图书', rules: [{required: true, message: '用户名'}]}],
                bookPrice: ['bookPrice', {initialValue: '100', rules: [{required: true, message: '密码'}]}],
                bookAuthor: ['bookAuthor', {initialValue: 'web作者', rules: [{required: true, message: '密码'}]}],
                bookLoading: false,
            }
        },
        methods:{
            handleSubmit() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        this.bookLoading = true;
                        let params = {
                            name: fieldsValue.bookName,
                            price: fieldsValue.bookPrice,
                            author: fieldsValue.bookAuthor,
                        };
                        this.$post('book/add', params).then(res=>{
                            if (res) {
                                this.bookLoading = false;
                                if (res.error === 0) {
                                    this.$router.push({path: '/http-book-index', query: {bookAddResult: '图书添加成功'}});
                                } else {
                                    alert("添加失败");
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