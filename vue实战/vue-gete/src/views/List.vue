<template>
  <div>
    <Heder>列表</Heder>
     <div class="container" ref="scrllele" @scroll="soll">
       <div class="lista">
          <ul>
            <router-link :to="{name:'detail',params:{id:item.id}}" v-for="item in lista" :key="item.id" tag="li">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p>{{item.info}}</p>
              <p>{{item.price}}$</p>
              <button class="btna" @click.stop="btns(item)">添加购物车</button>
            </router-link>
          </ul>
        </div>
        <div class="btn">
          <button>
               {{hasmore?"加载跟多":"没有跟多了"}}
          </button>
        </div>
        
     </div>
  </div>  
  
</template>

<script>
import Heder from "../components/Heder";
// 获取数据
import {getpage,postgood,jajan} from '../api';
export default {
  name: "list",
  data(){
    return {
      lista:[],
      arr:[],
      datas:1,
      hasmore:true
    }
  },
  components: {
    Heder
  },
  created() {
    this.getA()
  },
  methods: {  
    async stns(good){
      alert()
         await deletgood(good.id)
         this.lista = this.lista.filter(item=>item.id!=good.id)
    },
    async countdata(good){
      alert()
         await deletgood(good.id)
         this.lista = this.lista.filter(item=>item.id!=good.id)
    },
    // 点击购物车数量真加
    async btns(gooditem){
      let ja = await jajan(gooditem.id)
      gooditem.count = ja.count
      if(!gooditem.count){
        gooditem.count = 1
        let good =JSON.stringify(gooditem)
        postgood(good)
         return
      }
      gooditem.count ++
      let good =JSON.stringify(gooditem)
      postgood(good)
    },
    // 获取列表数据
    async getA(){
      let {hasmore,pagedata:list}= await getpage(this.datas)
        this.hasmore = hasmore
        this.lista=[...this.lista,...list]
    },

    // 滚动加载事假
    soll(){
      //节流
      clearTimeout(this.timer)
      this.timer=setTimeout(() => {
        let {scrollTop,scrollHeight,clientHeight} = this.$refs.scrllele
        if(scrollTop+clientHeight+100>scrollHeight){
          if(!this.hasmore)return
          this.datas +=1;
          this.getA()
        }
      }, 13);
    }
   
  },
};
</script>
<style lang="less" scoped>
.lista {
  padding: 20px;
  box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  img {
    max-width: 100%;
  }
  li {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  
}
.btna{
  width: 50%;
  line-height: 40px;
  font-size: 17px;
  background: orange;
}
.btn button{
  padding: 10px;
  border: none;
  margin: 30px 0;
  font-size: 20px;
  width: 60%;
  background: #2276dd;
  color:#fff;

}
</style>