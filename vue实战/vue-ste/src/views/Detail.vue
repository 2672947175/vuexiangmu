<template>
    <div class="conbox">
        <Heder :isshow="true">详情页</Heder>
        <div class="container">
            <div v-for="item in tdetail" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
                <p>{{item.info}}</p>
                <p>{{item.price}}$</p>
            </div>
        </div>
    </div>
</template>
<script>
import Heder from "../components/Heder";
import { getdetail } from "../api";
export default {
    name:'detail',
    data(){
        return {
            id:0,
            tdetail:[]
        }
    },
    components:{
        Heder,
    },
    // computed:{
    //     detaila(){
    //        return this.$route.params.id
    //     } 
    // },
    created(){
      this.id = this.$route.params.id
      this.getde()
       // 判断是否是空对象
        // if(JSON.stringify(this.tdetail)==='{}'){ }
        // if(!Object.keys(this.tdetail).length){
        //     this.$router.push('/list')
        // }
    },
    methods: {
        async getde(){
            let detai=await getdetail(this.id)
            this.tdetail = detai.xiang
            // console.log(detai,this.tdetail)
        },
       
    },
}
</script>
<style lang="less">
.conbox{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 20;
    background: #fff;
    .container{
        bottom: 0;
    }
    img{
        width: 100%;
    }
}



</style>