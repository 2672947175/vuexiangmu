<template>
    <div>
    <Heder>购物车</Heder>
    <div class="container">
      <!-- 购物车列表 -->
      <div class=libox>
        <div class="box" v-for="item in carlist" :key="item.id">
          <input v-model="item.xuanzhong" type="checkbox" @click="sss(item)" class="ina">
          <img :src="item.img" alt="">
          <ul>
            <li>{{item.name}}：{{item.info}}</li>
            <li>数量：<button @click="btnadd(item)">-</button>{{item.count}}<button @click="btnads(item)">+</button></li>
            <li>价格：{{item.price}}</li>
            <button class="shan" @click="shanc(item)">删除</button>
          </ul>
        </div>
      </div>
       <!-- 全选按钮 -->
      <div class="leb">
        <label for="checkall" >
           <input  v-model="checkAll" type="checkbox" class="ina"  id="checkall" @click="quan(checkAll)">
        </label>
        <span class="quna">全选</span>
        <div class="reg">
            <span class="jia">合计:￥{{total}}</span>
        <button @click="jishuan">结算({{ji}})</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heder from "../components/Heder";
// import {carLiat} from "../api"
// 获取数据
import {carLiat,postgood,jajan,xuangzh,deletgood} from '../api';
export default {
  name:'car',
  data(){
    return {
      carlist:[],
    }
  },components:{
    Heder,
  },
  created() {
    this.carli()
  },
  methods: {
    async carli(){
      this.carlist= await carLiat()
    },
    sss(val){
      let ff = this.carlist.find(item=>item.id==val.id)
      if(!ff.xuanzhong){
        ff.xuanzhong=true
        let good =JSON.stringify(ff)
        postgood(good)
        return
      }
      ff.xuanzhong=false
      let good =JSON.stringify(ff)
      postgood(good)
    },
    quan(val){
    },
    btnadd(gooditem){
      if(gooditem.count==1){
        return
      }
      gooditem.count --
      let good =JSON.stringify(gooditem)
      postgood(good)
    },
    btnads(gooditem){
       gooditem.count ++
      let good =JSON.stringify(gooditem)
      postgood(good)
    },
    jishuan(){
      if(this.ji==0){
        return
      }
      this.$router.push({
        name:'profile',
        params:{
          jis:{
            ja:this.ji,
            heji:this.total
          }
        }
      })
    },
    shanc(idx){
      this.carlist = this.carlist.filter(item => item.id != idx.id)
      deletgood(idx.id)
    }
  },
  computed: {
    checkAll:{
      get(){
        if(this.carlist.length==0){
            return this.checkAll=false
          }
        return this.carlist.every(item=>item.xuanzhong==true)
      },
      set(val){
        if(this.carlist.length==0){
          return 
        }
        this.carlist.forEach(check => check.xuanzhong = val);
        console.log(val)
        let good =JSON.stringify(val)
        xuangzh(good)

      }
    },
    total(){
      return this.carlist.filter(item=>item.xuanzhong == true).reduce((prev,next)=>prev+next.count*next.price,0)
    },
    ji(){
       return this.carlist.filter(item=>item.xuanzhong == true).reduce((prev,next)=>prev+next.count,0)
    }
  }
}
</script>
<style lang="less">
.libox{
  margin-bottom: 50px;
}
.leb{
  width: 100%;
  text-align: left;
  display: block;
  position: fixed;
  line-height: 60px;
  bottom: 60px;
  background: #ccc;
  box-sizing: border-box;
  z-index: 10;
  padding-left: 40px;
  color: #fff;
  .reg{
    float: right;
    padding-right: 10px;
    box-sizing: border-box;
    span{
      padding-right:20px; 
    }
    button{
      appearance: none;
      outline: none;
      padding: 10px 20px; 
      background: orange;
      border: none;
      font-size: 17px;
      color: #fff;
      border-radius: 10px;
      
    }
    
  }
}

.ina{
        appearance: none;
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        outline: none;
        border-radius: 5px;
        position: absolute;
        left: 5px;
        top:50%;
        margin-top: -15px;
      }
  .ina:checked.ina:before{
    position: absolute;
    content: '✔';
    font-size: 20px;
    line-height: 30px;
    left: 50%;
    transform:translate(-50%,0%)
  
  }
.box{
  width: 100%;
  display: flex;
  position: relative;
  padding: 0 0 0 50px ;
  box-sizing: border-box;
  .ina{
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top:-15px;
      }
  img{
    width: 200px;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    display: block;
  }
  ul{
    font-size: 17px;
    text-align: left;
    padding: 10px 0;
    box-sizing: border-box;
    li{
      margin: 10px 0;
      button{
        font-size: 20px;
        padding: 0 10px;
      }
      
    }
    .shan{
       appearance: none;
      outline: none;
        color: #fff;
        font-size: 20px;
        padding: 5px 10px;
        background: #ccc;
        border:none;
        margin: 10px 0;
    }
  }
}
  
</style>