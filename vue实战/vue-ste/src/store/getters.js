const getters ={
    checkAllval(state){
        if(state.carlist.length==0){
            return false
        }
        // 把选中的发在一个新的数组里面 判断原数组和新数组的长度
        let arrays = state.carlist.filter(item=>item.sele==true);
        return arrays.length == state.carlist.length;
    },
    //合计
    total(state){
        return state.carlist.filter(item=>item.sele==true).reduce((prev,next)=>prev +next.count*next.price	
            ,0)
    },
    // 个数
    cishus(state){
        return state.carlist.filter(item=>item.sele==true).reduce((prev,next)=>prev + next.count	
            ,0)   
    }


}
export default getters