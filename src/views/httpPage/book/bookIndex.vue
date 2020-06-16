<template>
    <div id="fei-demo">
        <div style="color: red"><h3>我是图书index页</h3></div>
        <div class="main-url">
            <router-link tag="button" :to="{ path: '/' }">首页-Home</router-link>
            <router-link tag="button" :to="{ path: '/http-index' }">首页-Page</router-link>
        </div>
        <br><br>
        <div>
            <el-button size="medium" type="primary" @click="delBook()">删除</el-button>
            <router-link tag="el-button" :to="{ path: '/http-book-add' }">图书添加</router-link>
        </div>
        <div>
            <el-table :data="tableData" :key="10000" @selection-change="selectChange" style="width: 100%;">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="id" label="id" width="80"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="price" label="价格" width="100"></el-table-column>
                <el-table-column prop="num_add" label="删除次数" width="100"></el-table-column>
                <el-table-column prop="author" label="作者" width="180"></el-table-column>
                <el-table-column prop="time_aaa" label="日期" width="380"></el-table-column>
                <el-table-column label="详细" style="color: red;" width="150">
                    <template class="fei" slot-scope="scope">
                        <el-button size="mini" type="text" :bookId="bookId" @click="bookDetailMethod(scope.row.id)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <!-- 分页 -->
            <el-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-size="per_page"
                    :page-sizes="[5,10,15,20]"
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange"
                    :total="total">
            </el-pagination>

           <!-- <router-view class="引用children路由"/>--> <!-- 可以做详情,弹窗-->

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
        </div>
    </div>
</template>

<script>
    export default {
        name: "bookIndex",
        data() {
            return {
                tableData: [
                    {
                        name: '史记',
                        price: '¥50',
                        author: 'dafei',
                        num_add: '0',
                        date: '2016-05-02',
                        detail: 'detail'
                    }, {
                        name: '汉书',
                        price: '¥100',
                        author: 'dafei',
                        num_add: '0',
                        date: '2016-05-02',
                        detail: 'detail'
                    }],
                total: 0,
                page: 1,
                per_page: 5,
                bookAddResult: '', // 图书添加成功消息提醒
                bookDetail: {}, // 我是图书详情
                bookId: '', // 图书id
                bookIds: '', // 图书id批量操作
            };
        },
        mounted(){
            // 页面一加载完成就执行getList方法
            this.getList();
            this.bookAddResult = this.$route.query.bookAddResult;//图书添加成功消息提醒
        },
        methods: {
            // 分页
            handleCurrentChange(page) {
                this.page = page;
                this.getList();
            },
            handleSizeChange(size) {
                this.page = 1;
                this.per_page = size;
                this.getList();
            },

            // 批量操作
            selectChange(val) {
                this.bookIds = val.map(item => {
                    return item.id;
                });
            },

            // 列表
            getList() {
                this.loading = true;
                let params = {
                    page: this.page,
                    per_page: this.per_page
                };
                this.$get('book/list', params).then(res => {
                    res.data.forEach(k => {
                        k.time_aaa = k.create_time;
                        // k.time_aaa = new Date().getTime();
                        // k.time_aaa = (new Date()).toLocaleDateString();
                    });
                    this.loading = false;
                    this.tableData = res.data;
                    this.total = res.page_count;
                })
            },

            //图书详情
            bookDetailMethod(bookId) {
                // this.loading = true;
                var params = {
                    bookId: bookId
                };
                this.$get('book/detail', params).then(res => {
                    this.bookDetail = res.data;
                });
            },

            // 删除
            delBook() {
                let params = {
                    book_ids: this.bookIds
                };
                this.$post('book/del', params).then(() => {
                    this.getList();
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
    #fei-demo {
        h1 {
            color: #ff9b90;
        }

        .el-table {
            margin-bottom: 30px;
        }

        .el-pagination {
            margin-bottom: 100px;
        }
    }
</style>