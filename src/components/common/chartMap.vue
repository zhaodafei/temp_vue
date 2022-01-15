<template>
  <initEcharts ref="myChartBar" :options="options"></initEcharts>
</template>

<script>
import initEcharts from "./initEcharts";


export default {
  name: "chartMap",
  components: {
    initEcharts,
  },
  props: {
    cdata: {
      type: Object,
      default: ()=>({})
    }
  },
  data() {
    return {
      options: {}
    };
  },
  watch: {
    cdata: {
      handler (newData) {
        this.drawMap(newData);
      },
      deep: true
    }
  },
  methods: {
    drawMap() {
      this.options = {
        series: [
          {  // 地图
            type: 'map',
            map: 'china',
            label: {
              show: true, //显示省份标签
              color: "#ff6b81"
            },
          },
        ]
      };
      this.$refs.myChartBar.initMap();
      this.$refs.myChartBar.drawChart(this.options);
    }
  },
}
</script>

<style scoped>

</style>
