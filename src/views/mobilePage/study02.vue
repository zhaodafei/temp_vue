<template>
    <div>
        <div>vant vant vant mobile-study02 mobile-study02</div>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button size="small" type="warning" native-type="button">验证</van-button>
    </div>
</template>

<script>

/* 这是 vant */
import Vue from 'vue';
import Vant, {Dialog} from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
/* 这是 vant */

export default {
    name: "mobile-study02",
    components: {},
    data() {
        return {
            isShowFile: true, //是否展示文件,选择上传
        }
    },
    methods: {},
    watch: {},
}
</script>

<style scoped>

</style>