<template>
    <div>
        <div><h3 style="color: red">我是月账单列表</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
            <a-button type="danger" @click="handleDelData">删除</a-button>
            <a-button type="primary" @click="handleAddData">月统计</a-button>
        </div>
        <div>
            <div class="left">
                <a-table bordered
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
            <div class="center"></div>
            <div class="right">
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form-wrapper" :form="form">
                    <a-form-item label="购买时间">
                        <a-range-picker v-decorator="consumeTime" :format="dateFormat"></a-range-picker>
                    </a-form-item>
                    <a-form-item label="消费途径">
                        <a-radio-group v-decorator="consumeWay">
                            <a-radio value="所有">所有</a-radio>
                            <a-radio value="线上">线上</a-radio>
                            <a-radio value="线下">线下</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item :wrapper-col="wrapperColItem">
                        <a-button type="primary" @click="handleReset">重置</a-button>
                        <a-button type="danger" @click="handleSubmit" :style="{ marginLeft: '8px' }">月统计</a-button>
                        <a-button type="primary" @click="handleBudget" :style="{ marginLeft: '8px' }">月预算</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <div>

        </div>
        <div>

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
        {title: '开始时间', dataIndex: 'startTime', key: 'startTime', width: 80,},
        {title: '结束时间', dataIndex: 'endTime', key: 'endTime', width: 80,},
        {title: '消费方式', dataIndex: 'consumeWay', key: 'consumeWay', width: 80,},
        {title: '消费共计(元)', dataIndex: 'allCount', key: 'allCount', width: 80,},
        // {title: "备注", dataIndex: "xxx", key: "xxx", align: "center", width: 400},
    ];
    export default {
        name: "billCountList",
        data() {
            return {
                // ↓↓↓ 主列表数据 ↓↓↓
                selectedRowKeys: [], // 配置默认复选框列 
                selectedRowItems: [],
                dataSource:[],
                columns,
                total: 0,
                currentPage: 1,
                pageSize: 10,
                // ↓↓↓ 统计表单 ↓↓↓
                form: this.$form.createForm(this),// form 表单
                labelCol: {xs: { span: 24 }, sm: { span: 5 },},
                wrapperCol: {xs: { span: 24 }, sm: { span: 12 },},
                wrapperColItem: { span: 14, offset: 8 },
                dateFormat: "YYYY-MM-DD",
                consumeWay: ['consumeWay', {initialValue: '所有', rules: [{required: true, message: '消费途径'}]}],
                consumeTime: ['consumeTime', {rules: [{ type: 'array', required: true, message: '请选择时间!' }]}],
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
                this.$get(this.$interfaces.getbillCountList, params).then(res => {
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
                this.$router.push({
                    path: '/http-bill-count',
                    query:{
                        // lastConsumeTime
                    },
                });
            },
            handleDelData() {
                let that = this;
                that.bill_count_ids = this.selectedRowItems.map(m => m.id);
                if (that.bill_count_ids.length === 0) {this.$message.warning("请选择一条数据");return false;}

                this.$confirm({
                    title: '确认要删除所选数据吗?',
                    content: '删除后不可恢复，返回点取消',
                    okText:"确认",
                    cancelText:"取消",
                    onCancel() {},
                    onOk() {
                        that.$post(that.$interfaces.billCountDel, {bill_count_ids: that.bill_count_ids }).then(resDel=>{
                            that.getList();
                        });
                    },
                });
            },
            // ↓↓↓ 统计表单 ↓↓↓
            handleSubmit() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        let params = {
                            consumeWay: fieldsValue.consumeWay,
                            startTime: fieldsValue.consumeTime[0].format(this.dateFormat),
                            endTime: fieldsValue.consumeTime[1].format(this.dateFormat),
                        };

                        this.$post(this.$interfaces.billCountAdd, params).then(res=>{
                            if (res.error === 0) {
                                this.$message.warning("统计成功");
                                this.getList();
                            } else {
                                this.$message.warning("添加失败");
                            }
                        });
                    }
                })
            },
            handleBudget() {
                this.form.validateFields((err,fieldsValue)=>{
                    if (!err) {
                        let params = {
                            consumeWay: fieldsValue.consumeWay,
                            startTime: fieldsValue.consumeTime[0].format(this.dateFormat),
                            endTime: fieldsValue.consumeTime[1].format(this.dateFormat),
                        };
                        this.$post(this.$interfaces.billCountBudget, params).then(res=>{
                            if (res.error === 0) {
                                this.$message.warning(`月预算金额: ${res.data.allCount} 元`);
                            } else {
                                this.$message.warning("月预算失败");
                            }
                        });
                    }
                })
            },
            handleReset() {
                this.form.resetFields();
            }
        }
    }
</script>

<style scoped>
    .left {
        float: left;
        width: 60%;
        height: 100%;
        background: #bfbfbf;
    }
    .center {
        float: left;
        width: 2%;
        height: 100%;
        background: #bfbfbf;
    }
    .right {
        float: right;
        width: 38%;
        height: 100%;
        background: #efefef;
    }
</style>