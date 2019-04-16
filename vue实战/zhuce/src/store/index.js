import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'

import mutations from './mutations'
import actions from './actions'
// 获取 定义一下


Vue.use(Vuex)
// Vuex是一个构造函数,看到就要抛出一个构造函数
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    
    // actions:{
    //     // commit 提交事假到 mutation
    //     actionAdd({ commit }) { // 流程2
    //         commit('toMu') // 流程3
    //     },
    //     getUserApi({ commit }){
    //         // 获取请求数据
    //         getUsername().then(data => {
    //             let { username} = data
    //             commit('muser', username)
    //         })
    //     }
    // },
    
    // mutations:{  // === methods
    //     // { name = "lili" }
    //     conut(state,paylod){
    //         // state.conut += paylod.a + paylod.b || 1
    //         state.conut += paylod||1
    //     },
    //     minu(state, paylod){
    //          state.conut -= paylod||1
    //     },
    //     toMu(state) {// 流程4
    //         state.conut++
    //     },
      
    //     muser(state,user){
    //         // console.log(user)
    //         state.username = user
    //     }
    // }

    // state: {  //state ==data
    //     a: '数据变量',
    //     ary:[1,2,3,4,5]
    // },
    // getters:{  //getters === computed
    //     b(state){
    //         // 必须写return
    //         let v = state.a = state.a+'getters'
    //         return state.v
    //     },
    //     fiary(state){
    //         let newarr = state.ary.filter(item=>item>2)
    //         return newarr
    //     }
    // }
})





