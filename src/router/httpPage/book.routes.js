
export default [
    {
        path: '/http-index',
        name: 'http-index',
        meta:{
            title: "http-index-title",
            content: "http-index-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/index.vue'),
    },
    {
        path: '/detail01',
        name: 'detail01',
        meta:{
            title: "http-detail01-title",
            content: "http-detail01-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/detail01.vue'),
    },
    {
        path: '/http-book-index',
        name: 'http-book-index',
        meta:{
            title: "http-book-index-title",
            content: "http-book-index-content",
            isLogin: true,
        },
        component: () =>  import('@/views/httpPage/book/bookIndex.vue'),
        children: [
            // {
            //     path: '/http-book-add', //  页面中引入 <router-view class="引用children路由"/>
            //     name: 'http-book-add',
            //     component: () =>  import('@/views/httpPage/book/bookAdd.vue'),
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
        component: () =>  import('@/views/httpPage/book/bookAdd.vue'),
    },
];