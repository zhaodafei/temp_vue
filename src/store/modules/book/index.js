import Vue from 'vue'

// 使用方法01:
//  this.$store.state.book
//  this.$store.state.book.bookState
//  this.$store.state.book.bookStateName

// 使用方法02:
//  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
//    computed: {
//     ...mapState(['book']),
//     ...mapGetters(['bookFoo']),
//   },
//   created() {
//     this.SET_FOO('abc')
//     this.update('xyz')
//   },
//   methods: {
//     ...mapMutations(['SET_FOO']),
//     ...mapActions(['update']),
//   },

const book={
    state:{
        bookState:"001",
        bookStateName:"大飞",
        foo: "123",
        bar: "456"
    },
    getters: {
      bookFoo: state => state.bookStateName + '123',
    },
    mutations: {
      SET_FOO: (state, newVal) => {
        state.foo = newVal;
      },
      SET_BAR: (state, newVal) => {
        state.bar = newVal;
      }
    },
    actions: {
      update({commit}, info) {
        commit('SET_BAR', info);
      }
    },

}

export { book }
