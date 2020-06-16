<template>
    <div id="book-add">
        <div style="color: red"><h3>我是图书Add页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/http-book-index' }">返回图书列表</router-link>
        </div>
        <br><br>
        <el-form :model="bookAdd" :rules="addRules" ref="">
            <el-form-item prop="name">
                名字: <el-input v-model="bookAdd.name"></el-input>
            </el-form-item>
            价格: <el-input v-model="bookAdd.price"></el-input>
            作者: <el-input v-model="bookAdd.author"></el-input>
            <el-button class="btn" size="medium" type="primary" @click="submitData">添加图书</el-button>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "book_add",
        data() {
            return {
                addRules: {},
                bookAdd: {
                    name: 'web图书',
                    price: '100',
                    author: 'web作者',
                }
            }
        },
        methods:{
            submitData() {
                let params = {
                    name: this.bookAdd.name,
                    price: this.bookAdd.price,
                    author: this.bookAdd.author,
                };
                this.$post('book/add', params).then((res) => {
                    if (res.error === 0) {
                        this.$router.push({path: '/http-book-index', query: {bookAddResult: '图书添加成功'}});
                    } else {
                        alert("添加失败");
                    }

                });
            }
        }
    };
</script>