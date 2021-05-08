<template>
    <div id="fei-demo">
        <div style="color: red"><h3>我是图书index页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
        </div>
        <br><br>
        <div>
            <a-button type="danger" @click="delBook()">删除</a-button>
            <router-link tag="button" :to="{ path: '/http-book-add' }">图书添加</router-link>
        </div>
        <a-table bordered
                 :title="()=>{return '我是图书列表'}"
                 :columns="columns"
                 :data-source="dataSource"
                 :rowKey="(record,index)=>{return index}"
                 :scroll="{x:'max-content',y:'10'}"
                 :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onChange}"
                 :pagination="false">
            <span slot="customAge" slot-scope="text, record" style="color: #ff6b81">
                <a-button type="link" @click="bookDetailMethod(record.id)">详情</a-button>
            </span>
        </a-table>
        <a-pagination
                size="small"
                :total="total"
                :pageSize="pageSize"
                :showTotal="total => `共 ${total} 条`"
                @change="changeCurrent">
        </a-pagination>

        <!-- 图书详情 -->
        <div id="book_detail">
            <template>
                <h3>这里是图书详细:</h3>
                <ul :data="bookDetail">
                    <li>ID: {{bookDetail.id}}</li>
                    <li>姓名: {{bookDetail.name}}</li>
                    <li>价格: {{bookDetail.price}}</li>
                    <li>作者: {{bookDetail.author}}</li>
                    <li>时间: {{bookDetail.create_time}}</li>
                </ul>
            </template>
        </div>
        <br><br><br>
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
        {title: '姓名', dataIndex: 'name', key: 'name', width: 80,},
        {title: '价格', dataIndex: 'price', key: 'price', width: 30,},
        {title: '删除次数', dataIndex: 'num_add', key: 'num_add', width: 30,},
        {title: '作者', dataIndex: 'author', key: 'author', width: 30,},
        {title: '日期', dataIndex: 'time_aaa', key: 'time_aaa', width: 30,},
        {title: '详细', dataIndex: 'detail', key: 'detail', width: 30, scopedSlots: { customRender: 'customAge' }},
    ];

    const dataSource = [
        {id: 'id1', name: '史记', price: '¥50', author: 'dafei', num_add: '0', date: '2016-05-02', time_aaa: '2016-05-02', detail: 'detail'},
        {id: 'id2', name: '汉书', price: '¥100', author: 'dafei', num_add: '0', date: '2016-05-02', time_aaa: '2016-05-02', detail: 'detail'}
    ];
    export default {
        name: "bookIndex",
        data() {
            return {
                selectedRowKeys: [], // 配置默认复选框列 
                selectedRowItems: [],
                dataSource,
                columns,
                total: 0,
                currentPage: 1,
                pageSize: 5,
                bookAddResult: '', // 图书添加成功消息提醒
                bookDetail: {}, // 我是图书详情
                bookId: '', // 图书id
                bookIds: '', // 图书id批量操作
            }
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
                this.$get("book/list", params).then(res => {
                    res.data.forEach(k => {
                        k.time_aaa = k.create_time;
                        // k.time_aaa = new Date().getTime();
                        // k.time_aaa = (new Date()).toLocaleDateString();
                    });
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

                this.bookIds = selectedRows.map(item => {
                    return item.id;
                });
            },
            //图书详情
            bookDetailMethod(bookId) {
                var params = {
                    bookId: bookId
                };
                this.$get('book/detail', params).then(res => {
                    this.bookDetail = res.data;
                });
            },
            delBook() {
                let params = {
                    book_ids: this.bookIds
                };
                this.$post('book/del', params).then(() => {
                    this.getList();
                });
            }
        }
    }
</script>

<style scoped>

</style>