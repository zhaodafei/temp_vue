import Vue from 'vue'
import Vuex from 'vuex'
import { book } from './modules/book/index'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        book
    }
});

export default store