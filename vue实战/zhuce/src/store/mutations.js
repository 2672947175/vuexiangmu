import * as Types from './mutations-types'
console.log(Types.ADD_COUNT)
let mutations = { 
    // input 的数据双向绑定
    changeconut(state,val){
        // state.
    },
    // === methods
    // { name = "lili" }
    conut(state, paylod){
        // state.conut += paylod.a + paylod.b || 1
        state.conut += paylod|| 1
    },
    minu(state, paylod){
        state.conut -= paylod || 1
    },
    toMu(state){
        state.conut --
    },
    muser(state,user){
        state.username = user
    },
    [Types.ADD_COUNT](state){
        state.conut ++
    }
}
export default mutations