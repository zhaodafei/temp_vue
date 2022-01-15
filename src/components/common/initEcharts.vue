<template>
  <div :id="id" ref="myChart" :style="{ height: height, width: width }"/>
</template>
<script>

/*
*  main.js 全局注册
*   import echarts from 'echarts'
*   Vue.prototype.$echarts = echarts
*   import 'echarts/map/js/china';
*
* 使用 this.$echarts.init()
* */
import ECharts from 'echarts'
// const ECharts = require("echarts");
import chinaData from "echarts/map/json/china.json"
import worldData from "echarts/map/json/world.json"


// 构建Echarts图表逻辑结构
export default {
  name: "",
  props: {
    id: {
      type: String,
      default: 'myChart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: ()=>({})
    }
  },
  data() {
    return {
      chart: null
    };
  },
  // watch: {
  //   options: {
  //     handler (options) {
  //       this.drawChart(options)
  //     },
  //     deep: true
  //   }
  // },
  mounted() {
    this.initChart();
  },
  beforeDestroy () {
    this.disposeChart();
  },
  methods: {
    // 初始化地图数据
    initMap(mapName = 'china') {
      if (mapName === "china") {
        ECharts.registerMap("china", chinaData);
      }else{
        ECharts.registerMap("world", worldData);
      }
    },
    // 初始化
    initChart() {
      this.chart = ECharts.init(this.$el);
      this.chart.setOption(this.options, true);
    },
    // 构建图
    drawChart(options) {
      this.chart.setOption(options, true)
    },
    // 销毁
    disposeChart() {
      this.chart.dispose();
      this.chart = null;
    }
  }
};
</script>
