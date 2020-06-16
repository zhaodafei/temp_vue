<template>
    <div id="study01">
        <div style="color: red"><h3>我是generalPage页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/general-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/general-study01' }">组件测试</router-link>
        </div>
        
        <div>
            <h3>下面是 components 组件的使用</h3>
            <loginLikeBtn style="margin-left: 0;">我是组件</loginLikeBtn>
            <login-like-btn style="margin-left: 0;">我是组件</login-like-btn>
            <br/><br/>
            <loginCloseBtn style="margin-left: 10px;">我是组件</loginCloseBtn>
            <login-close-btn style="margin-left: 10px;">我是组件</login-close-btn>
        </div>
        
        <div>
            <h3>Bus 使用</h3>
            <div><button @click="cliMe">点击我</button></div>
        </div>
    </div>
</template>

<script>
    //喜欢组件
    import likeBtn from '../../components/like-btn.vue'
    import loginCloseBtn from '../../components/close-btn.vue'
    import Bus from '@/utils/eventBus';
    
    export default {
        name: "study01",
        components: {
            loginLikeBtn: likeBtn,
            loginCloseBtn
        },
        created() {
            console.log(this.$store.state.book);
            console.log(this.$store.state.book.bookState);
            console.log(this.$store.state.book.bookStateName);
        },
        mounted() {
            Bus.$on('daFeiBus',function (val) {
                console.log("准备接受数据", val);
            })
        },
        methods:{
            cliMe() {
                Bus.$emit('daFeiBus',"发送数据")
            }
        }
    }
</script>

<style scoped>
    
</style>