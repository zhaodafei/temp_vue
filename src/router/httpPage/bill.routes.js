
export default [
    {
        path: '/http-bill-index',
        name: 'http-bill-index',
        meta:{
            title: "http-bill-title",
            content: "http-bill-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billIndex.vue'),
    },
    {
        path: '/http-bill-add',
        name: 'http-bill-add',
        meta:{
            title: "http-bill-add-title",
            content: "http-bill-add-content",
            isLogin: false,
        },
        component: () =>  import('@/views/httpPage/bill/billAdd.vue'),
    },
];