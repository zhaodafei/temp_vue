<template>
    <div id="study01">
        <div style="color: red"><h3>我是http detial01页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
        </div>

        <div>
            <h3>下面是 components 组件的使用</h3>
            <button @click="cliDetail">获取图书详细</button>
            <p><span>免得登录测试接口</span> http://demo.yizheng_fei.com/api/user/detail?bookId=3</p>
            <!-- 图书详情 -->
            <div id="book_detail">
                    <h4>这里是图书详细:</h4>
                    <ul :data="bookDetail" v-if=showData>
                        <li>ID: {{bookDetail.id}}</li>
                        <li>姓名: {{bookDetail.name}}</li>
                        <li>价格: {{bookDetail.price}}</li>
                        <li>作者: {{bookDetail.author}}</li>
                        <li>时间: {{bookDetail.create_time}}</li>
                    </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail01",
        data() {
            return {
                bookDetail: {}, //图书详细
                showData: false
            };
        },
        
        methods: {
            // 图书详细
            cliDetail() {
                this.$get(this.$interfacres.getBookDetail, {bookId: 3}).then(res => {
                    this.showData = true;
                    window.console.log(res);
                    this.bookDetail = res;
                });
            }
        }
    }
</script>

<style scoped>

</style>