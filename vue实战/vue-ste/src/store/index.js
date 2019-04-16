import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations"
import getters from './getters'
import actions from './actions'
let state={
    carlist:[]
}
if(localStorage&&localStorage['carlist']){
    state.carlist = JSON.parse(localStorage['carlist'])
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})