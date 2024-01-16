<template>
    <div>
      <div style="width: 500px">
        <a-menu
            theme="dark"
            :default-selected-keys="['sub1']"
            :selected-keys="['sub1']"
            mode="inline"
        >
          <a-sub-menu key="sub1">
            <span slot="title">初始化设置</span>
            <a-menu-item key="1">
              <router-link :to="{path:'/system/set',query:{}}">
                系统设置
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">其他设置</span>
            <a-menu-item key="5">
              <router-link :to="{path:'/system/mainColor',query:{}}">
                网站主题色
              </router-link>
            </a-menu-item>
            <a-menu-item key="6">
              <router-link :to="{path:'/system/mainTitle',query:{}}">
                网站标题
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>

      <div style="width: 600px;margin-top: 20px">
        <a-menu theme="dark" mode="inline">
          <template v-for="item in FeiMenu">
            <a-menu-item v-if="!item.children" :key="item.name">
              <span>  <a-icon :type="item.iconType"/> {{ item.name }} (第一层)</span>
            </a-menu-item>

            <FeiMenuItem v-else :menuInfo="item" :key="item.name"/>
          </template>
        </a-menu>
      </div>
    </div>
</template>
<script>

    /* 这是ant-design-vue */
    import Vue from 'vue'
    import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    /* 这是ant-design-vue */

    import FeiMenuItem from './component/FeiMenuItem.vue'
    const FeiMenu = [
      {
        name: '首页',
        url: 'http://127.0.0.1:8888',
        iconType: 'menu'
      },
      {
        name: '系统管理',
        url: null,
        iconType: 'bars',
        children: [
          {
            name: '菜单管理',
            url: 'http://127.0.0.1:8888/system/role.html',
            iconType: 'laptop',
            // children: []
          },
          {
            name: '角色管理',
            url: 'http://127.0.0.1:8888/system/role.html',
            iconType: 'like',
            // children: []
          }
        ]
      },
      {
        name: '系统工具',
        url: null,
        iconType: 'lock',
        children: [
          {
            name: '日志分类',
            url: null,
            iconType: 'mail',
            children: [
              {
                name: '系统日志222',
                url: 'http://127.0.0.1:8888/system/log.html',
                iconType: 'mail',
              }
            ]
          }
        ]
      },
      {
        name: '关于网站',
        url: 'http://127.0.0.1:8888/about.html',
        iconType: 'ordered-list'
      }
    ]

    export default {
      components: {
        FeiMenuItem,
      },
      data() {
        return {
          isShowFile: true, //是否展示文件,选择上传
          FeiMenu,
        }
      },
      methods: {},
      watch: {},
    };
</script>

<style scoped>

</style>
