<template>
    <div>
        <button v-for="(item,index) in headerBtns" :key="index" @click="$emit(item.handleClick)">
            {{ item.name}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "headerBtn",
        props: {
            headerBtns: {  //父组件没有传参时,使用这个
                type: Array,
                default() {
                    return [
                        {type: 'primary', icon: 'goBack', name: '返回', handleClick: 'handleBack'},
                        {type: 'primary', icon: 'save', name: '保存', handleClick: 'handleSave'},
                        {type: 'primary', icon: 'check-submit', name: '提交', handleClick: 'handleSubmit'},
                    ]
                }
            }
        },
        created() {
            // console.log("eeeeee",this.headerBtns);
        }
        
    }
</script>

<style scoped>
body{
    width: 20px;!important;
}
</style>