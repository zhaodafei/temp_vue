
export default [
    {
        path: '/general-index',
        name: 'general-index',
        meta:{
            title: "general-index-title",
            content: "general-index-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/index.vue'),
    },
    {
        path: '/general-study01',
        name: 'general-study01',
        meta:{
            title: "general-study01-title",
            content: "general-study01-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study01.vue'),
    },
];

