<template>
  <div>
    <div>mint-ui mint-ui mobile-a-study01</div>

    <mt-button @click.native="handleClick">按钮</mt-button>
    <mt-switch :value.sync="value"></mt-switch>
    <mt-switch :value.sync="value">开关</mt-switch>
  </div>
</template>

<script>

    /* 这是 mint-ui */
    import Vue from 'vue';
    import {Button,Switch} from 'mint-ui'; // todo: 按需引入
    import 'mint-ui/lib/style.min.css';

    Vue.component(Button.name, Button); // todo: 按需引入
    Vue.component(Switch.name, Switch);
    /* 这是 mint-ui */

    export default {
        name: "study_zzz_mintUi_a.vue",
        data() {
            return {
                value:true,
            }
        },
        methods: {
            handleClick: function() {
                console.log("fei");
            }
        }
    }
</script>

<style scoped>

</style>