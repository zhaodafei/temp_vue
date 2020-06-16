import Vue from 'vue'
import originAxios from 'axios'
import Qs from 'qs'

//定义变量
// let base_url=process.env.VUE_APP_BASE_URL;
var base_url = process.env.VUE_APP_BASE_URL;
// var base_url='http://demo.yizheng_fei.com/api/';
// console.log("eeeeeeeeeeeee", process.env);
// console.log("eeeeeeeeeeeee",base_url);
//创建一个 axios 实例
var axios_instance = originAxios.create({
    timeout: 300000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    baseURL: base_url
});

/**
 *  http request 请求拦截
 * 1.对请求头做统一处理
 */
axios_instance.interceptors.request.use(config => {
        // 01) 当发送网络请求时, 在页面中添加一个loading组件, 作为动画
        //  console.log("是否需要添加loading动画")

        // 02) 某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
        // var user = JSON.parse(sessionStorage.getItem('user'));
        // if (user) {
        //     config.headers.Authorization = user.authorization;
        //     config.headers.dafei = 1234567890;
        // }
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            config.headers.Authorization = user.authorization;
            // config.headers.dafei = 1234567890;
        }
    
        // 03) 对请求的参数进行序列化(看服务器是否需要序列化)
        // config.data = Qs.stringify(config.data);
        // console.log(config);
        
        return config;
    }, err => {
        return Promise.reject(err);
    }
);

/**
 *  http response 响应拦截
 * 1.对返回数据的数据做统一提示
 */
axios_instance.interceptors.response.use(response => {
    // return response.data
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = "请求错误";
                break;
            case 401:
                err.message = '未授权的访问';
                break;
            case 500:
                err.message = '服务器错误';
                break;
            default:
                console.log('服务器存在异常', 'middle');
                break;
        }
        return err;
    }
});
//封装一个 get 方法
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios_instance.get(url, {
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios_instance.post(url,
            Qs.stringify(data, {arrayFormat: 'indices'})
        ).then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        }).catch(err => {
            // console.log("catch".err);
        }).finally(() => {
            // console.log("finally");
        });
    })
}

//定义全局变量
Vue.prototype.$get=get;
Vue.prototype.$post=post;