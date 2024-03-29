import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
// import "./utils/element.js" // 使用 Element 的UI
import './assets/css/common.scss'
import './utils/http/axios_instance.js'
import interfaces from './api/interfaces.js'
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 阻止启动生产消息
Vue.config.productionTip = false;

// Vue.prototype.$interfacres = interfaces;
Vue.prototype.$interfaces = interfaces; // 定义接口常量
Vue.prototype.$moment = moment; // 时间  this.$moment().format('YYYY-MM-DD HH:mm:ss');

//指令
Vue.directive('my-fei-directive', {
    inserted: function (el, binging, vnode, oldVnode) {
        el.focus();
        el.style.borderColor = "red";
        el.value = "我是fei";
    }
});
/*Vue.directive('my-fei-directive2', {
    inserted: function (el, binging, vnode, oldVnode) {
        console.log(binging.value);
        el.focus();
        el.style.borderColor = binging.value.color;
        el.value = binging.value.text;
    }
});*/
import importDirective from "./utils/directiveUtils";
import Element from "element-ui";
Vue.use(importDirective);

// 登录判断
router.beforeEach((to, form, next) => {
    /* 路由发生变化修改页面meta */
    // if (to.meta.content) {
    //     let head = document.getElementsByTagName('head');
    //     let meta = document.createElement('meta');
    //     meta.content = to.meta.content;
    //     head[0].appendChild(meta);
    // }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    // 登录判断
    if (to.path === '/http-login') {
        sessionStorage.removeItem('user');
    }
    if (to.meta.isLogin && !JSON.parse(sessionStorage.getItem('user'))) {
        next({path: '/http-login'})
    }

    next()
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
