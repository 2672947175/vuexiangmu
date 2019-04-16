const getters ={
    fun(state) {
        return state.conut % 2 ? "奇数" : "偶数"
    },
    b(state){
        // 必须写return      
        let v = state.a = state.a + 'fake'
        return state.v
    },
    fiary(state){
        let newarr = state.ary.filter(item => item > 2)
        return newarr
    }
}