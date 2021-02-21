
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
    {
        path: '/general-study02',
        name: 'general-study02',
        meta:{
            title: "general-study02-title",
            content: "general-study02-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study02.vue'),
    },
    {
        path: '/general-study03',
        name: 'general-study03',
        meta:{
            title: "general-study03-title",
            content: "general-study03-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study03.vue'),
    },
    {
        path: '/general-study04',
        name: 'general-study04',
        meta:{
            title: "general-study04-title",
            content: "general-study04-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study04.vue'),
    },
    {
        path: '/general-study05',
        name: 'general-study05',
        meta:{
            title: "general-study05-title",
            content: "general-study05-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study05.vue'),
    },
    {
        path: '/general-study06',
        name: 'general-study06',
        meta:{
            title: "general-study06-title",
            content: "general-study06-content",
            isLogin: false,
        },
        component: () =>  import('@/views/generalPage/study06.vue'),
    },
];