// 合并所有接口文件
import book from './book';
import bill from './bill';

let interfaces = {};

Object.assign(interfaces,book,bill);

export default interfaces;