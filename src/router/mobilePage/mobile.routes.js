export default [
    {
        path: '/mobile-index',
        name: 'mobile-index',
        meta:{
            title: "mobile-index-title",
            content: "mobile-index-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/index.vue'),
    },
    {
        path: '/mobile-study01',
        name: 'mobile-study01',
        meta:{
            title: "mobile-study01-title",
            content: "mobile-study01-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/study01.vue'),
    },
    {
        path: '/mobile-study02',
        name: 'mobile-study02',
        meta:{
            title: "mobile-study02-title",
            content: "mobile-study02-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/study02.vue'),
    },
    {
        path: '/mobile-study03',
        name: 'mobile-study03',
        meta:{
            title: "mobile-study03-title",
            content: "mobile-study03-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/study03.vue'),
    },
    {
        path: '/mobile-study04',
        name: 'mobile-study04',
        meta:{
            title: "mobile-study04-title",
            content: "mobile-study04-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/study04.vue'),
    },
    {
        path: '/mobile-study-ui',
        name: 'mobile-study-ui',
        meta:{
            title: "mobile-study-ui-title",
            content: "mobile-study-ui-content",
            isLogin: false,
        },
        component: () =>  import('@/views/mobilePage/study_zzz_mintUi_a.vue'),
    },
]