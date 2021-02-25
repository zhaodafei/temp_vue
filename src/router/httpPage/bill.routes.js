
export default [
    {
        path: '/http-bill-index',
        name: '商品账单列表',
        meta:{
            title: "http-bill-title",
            content: "http-bill-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billIndex.vue'),
    },
    {
        path: '/http-bill-add',
        name: '商品账单添加',
        meta:{
            title: "http-bill-add-title",
            content: "http-bill-add-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billAdd.vue'),
    },
    {
        path: '/http-bill-count-list',
        name: '月账单统计列表',
        meta:{
            title: "http-bill-count-list",
            content: "http-bill-count-list",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billCountList.vue'),
    },
    {
        path: '/http-bill-count',
        name: '总账单统计添加',
        meta:{
            title: "http-bill-count",
            content: "http-bill-count",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billCount.vue'),
    },
];