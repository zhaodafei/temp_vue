<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <a-icon :type="props.menuInfo.iconType" />
      {{ props.menuInfo.name }} (???)
    </span>

    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <span tip-fei="多于2级菜单">{{ item.name }} (多级)</span>
      </a-menu-item>

      <!-- FeiMenuItem 当前组件名字(文件名字) -->
      <FeiMenuItem v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "FeiMenuItem",
  props: ['menuInfo']
}
</script>

<style scoped>

</style>

