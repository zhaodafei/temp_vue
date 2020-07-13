import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 导入其他文件下面的路由
const otherRoutes = [];

function importALL() {
    let context = require.context("./", true, /\.routes\.js/);

    context.keys().forEach(key => {
        context(key).default.forEach(r => {
            otherRoutes.push(r);
        });
    });
}

importALL();

// 组件模块
import HelloWorld from '../components/HelloWorld.vue'

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            meta:{
                title: "首页-title",
                content: "首页-content",
                isLogin: false, //是否需要登录
                selfContent: "首页-selfContent",
            },
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            meta:{
                title: "HelloWorld-title",
                content: "HelloWorld-content",
                isLogin: false,
            },
            component: HelloWorld
        },
        {
            path: '*',  // * 表示其他路径匹配不到的都显示这个页面
            name: '404',
            meta:{
                title: "404-title",
                content: "404-content",
                isLogin: false,
            },
            component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
        },
        ...otherRoutes  // 导入其他文件下面的路由
        //************************* ↓↓↓ generalPage 模块 ↓↓↓  ************************* 
        /*{
            path: '/general-index',
            name: 'general-index',
            meta:{
                title: "general-index-title",
                content: "general-index-content",
                isLogin: false,
            },
            component: () =>  import('../views/generalPage/index.vue'),
        },
        {
            path: '/general-study01',
            name: 'general-study01',
            meta:{
                title: "general-study01-title",
                content: "general-study01-content",
                isLogin: false,
            },
            component: () =>  import('../views/generalPage/study01.vue'),
        },*/
        //************************* ↓↓↓ httpPage 模块 ↓↓↓  ************************* 
        /*{
            path: '/http-index',
            name: 'http-index',
            meta:{
                title: "http-index-title",
                content: "http-index-content",
                isLogin: false,
            },
            component: () =>  import('../views/httpPage/index.vue'),
        },
        {
            path: '/detail01',
            name: 'detail01',
            meta:{
                title: "http-detail01-title",
                content: "http-detail01-content",
                isLogin: false,
            },
            component: () =>  import('../views/httpPage/detail01.vue'),
        },
        {
            path: '/http-login',
            name: 'http-login',
            meta:{
                title: "http-login-title",
                content: "http-login-content",
                isLogin: false,
            },
            component: () =>  import('../views/httpPage/login.vue'),
        },
        {
            path: '/http-book-index',
            name: 'http-book-index',
            meta:{
                title: "http-book-index-title",
                content: "http-book-index-content",
                isLogin: true,
            },
            component: () =>  import('../views/httpPage/book/bookIndex.vue'),
            children: [
                // {
                //     path: '/http-book-add', //  页面中引入 <router-view class="引用children路由"/>
                //     name: 'http-book-add',
                //     component: () =>  import('../views/httpPage/book/bookAdd.vue'),
                // },
            ]
        },     
        {
            path: '/http-book-add',
            name: 'http-book-add',
            meta:{
                title: "http-book-add-title",
                content: "http-book-add-content",
                isLogin: true,
            },
            component: () =>  import('../views/httpPage/book/bookAdd.vue'),
        },*/
    ]
})