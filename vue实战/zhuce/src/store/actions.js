import { getUsername } from "../api";
let actions= {
    // commit 提交到 mutation
    actionAdd({ commit }) { // 流程2
        commit('toMu') // 流程3
    },
    getUserApi({ commit }){
        // 获取请求数据
        getUsername().then(data => {
            let { username } = data
            commit('muser', username)
        })
    }
}
export default actions