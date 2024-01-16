<template>
    <div style="display: inline-block;background-color:#ff6b81;">
      <p>
        {{ cdata }}
      </p>

      <p>
        {{cdata.name}}
      </p>

      <!--
      使用
        <FeiTest :cdata="{fei:'1111'}" />

        import FeiTest from '@/components/FeiTest.vue'
        components:{
          FeiTest
        },
      -->
    </div>
</template>

<script>
export default {
  name: "FeiTest",
  props: ['cdata']
  // props: {
  //   cdata: {
  //     type: Object,
  //     default: ()=>({})
  //   }
  // },
}
</script>

<style scoped>

</style>

