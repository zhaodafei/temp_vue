const webpack = require("webpack");

module.exports = {
    /**
     * 基本路径
     * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
     * 例如 https://www.fei.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
     * 例如，如果你的应用被部署在 https://www.fei.com/admin/，则设置 baseUrl 为 /admin/。
     * */
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // publicPath: './',
    publicPath: '/', // 历史模式中不能加点
    // 打包输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
        // html-webpack-plugin 配置 see https://www.npmjs.com/package/html-webpack-plugin
        config.plugin('html').tap(option => {
            option[0].title = "我是daFei_title" // 默认 页面中使用 <%= htmlWebpackPlugin.options.title %>
            return option;
        })
    },
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    /*css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },*/
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        //将服务启动后默认打开浏览器
        open: true,
        host: '0.0.0.0',
        port: 8084,
        // https: false,
        // hotOnly: false,
        proxy: {// 设置代理,解决跨域问题
            '/api': {
                // target: 'https://www.test.com/',
                // target: 'http://demo.yizheng_fei.com/',
                target: process.env.VUE_APP_SHOW_URL,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': '/api'
                // }
            }
        },
        // proxy:"http://demo.yizheng_fei.com/api/",
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};
