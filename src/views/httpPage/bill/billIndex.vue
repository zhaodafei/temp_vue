<template>
    <div>
        <div><h3 style="color: red">我是商品 index 页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <router-link tag="button" :to="{ path: '/http-bill-count-list' }">月账单统计列表</router-link>
            <a-button type="danger" @click="handleDelData">删除</a-button>
            <a-button type="primary" @click="handleAddData">添加</a-button>
        </div>
        <div>
            <a-table bordered
                     :title="()=>{return '我是账单列表'}"
                     :columns="columns" 
                     :data-source="dataSource"
                     :rowKey="(record,index)=>{return index}"
                     :scroll="{x:'max-content',y:'10'}"
                     :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onChange}"
                     :pagination="false">
            </a-table>
            <a-pagination
                    size="small"
                    :total="total"
                    :pageSize="pageSize"
                    :showTotal="total => `共 ${total} 条`"
                    @change="changeCurrent">
            </a-pagination>
        </div>
        <div style="height: 100px"></div>
    </div>
</template>

<script>
    /* 这是ant-design-vue */
    import Vue from 'vue'
    import Antd from 'ant-design-vue'  //这是ant-design-vue
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    /* 这是ant-design-vue */
    
    
    const columns = [
        {title: 'ID', dataIndex: 'id', key: 'id', width: 30,},
        {title: '商品名称', dataIndex: 'goodsName', key: 'goodsName', width: 80,},
        {title: '单价(元)', dataIndex: 'unitPrice', key: 'unitPrice', width: 30,},
        {title: '数量', dataIndex: 'goodsNumber', key: 'goodsNumber', width: 30,},
        {title: '总价格', dataIndex: 'countPrice', key: 'countPrice', width: 30,},
        {title: '消费途径', dataIndex: 'consumeWay', key: 'consumeWay', width: 30,},
        {title: '备注', dataIndex: 'goodsComment', key: 'goodsComment', width: 30,},
        {title: '单号分组', dataIndex: 'goodsNumType', key: 'goodsNumType', width: 80,},
        {title: '购买时间', dataIndex: 'consumeTime', key: 'consumeTime', width: 80,},
        {title: '入库时间', dataIndex: 'createdTime', key: 'createdTime', width: 80,},
        {title: "xxx", dataIndex: "xxx", key: "xxx", align: "center", width: 80},
    ];
    export default {
        name: "billIndex",
        data() {
            return {
                selectedRowKeys: [], // 配置默认复选框列 
                selectedRowItems: [],
                dataSource:[],
                columns,
                total: 0,
                currentPage: 1,
                pageSize: 10,
                // goodsDetail: {}, // 我是图书详情
                // goodsId: '', // 图书id
                // goodsIds: '', // 图书id批量操作
            };
        },
        created() {
            this.getList();
        },
        methods:{
            getList() {
                this.selectedRowKeys= [];
                this.selectedRowItems= [];
                this.dataSource = [];
                
                let params = {page: this.currentPage, per_page: this.pageSize};
                this.$get(this.$interfaces.getGoodsList, params).then(res => {
                    this.dataSource = res.data;
                    this.total = res.page_count;
                })
            },
            changeCurrent(currentPage, pageSize) {
                this.currentPage = currentPage;
                this.pageSize = pageSize;
                this.getList();
            },
            onChange(selectedRowKeys, selectedRows) {
                this.selectedRowKeys = selectedRowKeys;
                this.selectedRowItems = selectedRows;
            },
            handleAddData() {
                // let lastConsumeTime = this.dataSource.length > 0 ? this.dataSource[0].consumeTime : this.$moment().format("YYYY-MM-DD HH:mm:ss");
                // let lastConsumeWay = this.dataSource.length > 0 ? this.dataSource[0].consumeWay : "线下";
                if (this.dataSource.length > 0) {
                    sessionStorage.setItem("lastDataSourceOne", JSON.stringify(this.dataSource[0]));
                }
                this.$router.push({
                    path: '/http-bill-add',
                    query:{
                        // lastConsumeTime,
                        // lastConsumeWay
                    },
                });
            },
            handleDelData() {
                let that = this;
                that.book_ids = this.selectedRowItems.map(m => m.id);
                if (that.book_ids.length === 0) {this.$message.warning("请选择一条数据");return false;}
                
                this.$confirm({
                    title: '确认要删除所选数据吗?',
                    content: '删除后不可恢复，返回点取消',
                    okText:"确认",
                    cancelText:"取消",
                    onCancel() {},
                    onOk() {
                        that.$post(that.$interfaces.goodsDel, {book_ids: that.book_ids }).then(resDel=>{
                            that.getList();
                        });
                    },
                });
            }
        }
    }
</script>

<style scoped>

</style>