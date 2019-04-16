import * as Types from './mutations-type'
import Vue from 'vue'
let mutations ={
    // ations 流程4 全选事件
    chang(state,val){
        state.carlist.forEach(checkbox => {
            checkbox.sele = val
        })
    },

    // 添加购物车的事件
    // 减
    miuns(state,params){
       let good = state.carlist.find(item => item.id == params.id)
       if(good.count ==1){
           return
       }
       good.count --
        //必须手动更新vuex 里面的数据
        state.carlist = [...state.carlist]
    },
    // 加
    add(state,params){
        let good = state.carlist.find(item=>item.id==params.id)
        good.count ++
        state.carlist = [...state.carlist]
    },
    // 删
    san(state,params){
        let aa = JSON.parse(localStorage['carlist'])
        let cc = aa.filter(item=>item.id!=params.id)
        localStorage['carlist']=JSON.stringify(cc)
        state.carlist = state.carlist.filter(item=>item.id!=params.id)
    },
    [Types.ADD_CAR](state,payload){
        let good = state.carlist.find(item=>payload.id==item.id);
        console.log(payload)
        if(!good){
            Vue.set(payload,'sele',true)
            payload.count = 1;
            state.carlist = [...state.carlist,payload]
        }
        else{
            Vue.set(good,'sele',true)
            good.count ++;
            state.carlist = [...state.carlist]
        }
        //利用本地缓存来存储
        if(localStorage){
            localStorage['carlist']=JSON.stringify(state.carlist)
        }
    }
    

}
export default mutations