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
              <button class="btna" @click.stop="stns(item)">删除购物车</button>
            </router-link>
          </ul>
        </div>
        <div class="btn">
          <button @click="btn">
               {{hasmore?"加载跟多":"没有跟多了"}}
          </button>
        </div>
        
     </div>
  </div>  
  
</template>

<script>
import Heder from "../components/Heder";
import * as Types from '../store/mutations-type.js'
// 获取数据
import {getpage,deletgood} from '../api';
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
    //删除事件
    // async stns(val){
    //     await delegood(val.id)
    //     this.lista = this.lista.filter(item=>item.id!=val.id) 
    // },
     
    async stns(good){
      alert()
       //delegood id 
       //请求方式：delete 
      // 请求地址： url:/delegood 
      // 参数 商品id String 
      // 后端删除成功前端在去做删除 
         await deletgood(good.id)
         this.lista = this.lista.filter(item=>item.id!=good.id)
    },

    btns(gooditem){
      // this.$store.commit(Types.ADD_CAR,item)
      // 设置数据缓存 
      // 1. 获取 localStorage 判断是否存在 如果存在就获取这个数组
      // 如果不存在就添加一个空数组
      let carlist
      if(localStorage&&localStorage['carlist']){
        // 自定义是否选中
        carlist = JSON.parse(localStorage['carlist'])
      }else{
        carlist = []
      }
      // 2.判断里面的 数据是否存在如果存在就它数量真加
      let good = carlist.find(item=>item.id==gooditem.id)
      if(!good){
        gooditem.count=1;
         // 自定义是否选中的双向绑定的值
         this.$set(gooditem,'xuanzhong',true)
         // 把当前数据添加到 carlist 数组中
        carlist = [...carlist,gooditem]
      }else{
         // 把缓存里面的数量
          this.$set(good,'xuanzhong',true)
         good.count ++
      }
      // 3.设置缓存
      localStorage['carlist']=JSON.stringify(carlist)
    },

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
    },
     btn(){
        if(!this.hasmore)return
        this.datas +=1;
        this.getA()
    },
   
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