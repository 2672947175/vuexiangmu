const actions = {
    aquan({commit},val){
        commit('chang',val)
    },
    // 商品数量减一
    miunsa({commit},params){
        commit('miuns',params)
    },
    // 商品数量加一
    adda({commit},params){
        commit('add',params)
    },
    sans({commit},params){
        commit('san',params)
    }
    
}
export default actions