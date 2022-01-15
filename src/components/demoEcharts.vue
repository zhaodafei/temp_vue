<template>
  <div style="width: 700px;height: 700px">
    <EchartsMapChina :cdata="cdata"></EchartsMapChina>
  </div>
</template>
<script>
import EchartsMapChina from '@/components/common/chartMap'

export default {
  components: {EchartsMapChina},
  data() {
    return {
      cdata: {
        title:"ddd"
      }
    }
  },
  mounted() {
    const {cdata} = this;
    this.cdata = {...cdata};
  },
  methods: {},
};
</script>

<style scoped>

</style>
