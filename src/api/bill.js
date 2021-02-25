// 图书接口
// let domain = process.env.VUE_APP_BASE_URL;

let interfaces = {
    // 免登录接口测试
    // getBookDetail: 'user/detail',
    
    //  *********** 商品管理 ***********
    goodsAdd: 'goods/add',
    goodsDel: 'goods/del',
    getGoodsList: 'goods/list',
    getGoodsDetail: 'goods/detail',
    //***********
    
    //*********** 账单管理 ***********
    billCountAdd: 'billCount/add',
    billCountBudget: 'billCount/budget',
    billCountDel: 'billCount/del',
    getbillCountList: 'billCount/list',
};

export default interfaces;