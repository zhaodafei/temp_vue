import Vue from "vue";
// 指令
/*const importDirective = Vue => {
    Vue.directive('my-fei-directive2', {

            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el, binging, vnode, oldVnode) {
                console.log(binging.value);
                el.focus();
                el.style.borderColor = binging.value.color;
                el.value = binging.value.text;
            }
        }
    )
};*/
const importDirective = Vue.directive('my-fei-directive2', {
    inserted: function (el, binging, vnode, oldVnode) {
        console.log(binging.value);
        el.focus();
        el.style.borderColor = binging.value.color;
        el.value = binging.value.text+"1111111";
    }
});
export default importDirective
