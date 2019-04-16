<template>
    <div>
       
        <div class="con">
             <ul>
                <li v-for="(item,index) in arr" :key="index">
                    {{item}}
                    <button @click="shan(index)">删除</button>
                </li>
            </ul>
            <input type="text" ref="te">
           <button @click="tian">添加</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'libiao',
    data(){
        return{
            arr:['aaa','bbbb','ccc']
        } 
    },
    methods:{
        tian(){
           let a = this.$refs.te.value
           if(this.$refs.te.value==''){
               return
           }
           this.arr.push(a)
           this.$refs.te.value=''
        },
        shan(index){
            this.arr.splice(index,1)
        }
    }

}
</script>
<style>
   
</style>

