<template>
    <div>
    <Heder>购物车</Heder>
    <div class="container">
      <!-- 购物车列表 -->
      <div class=libox>
        <div class="box" v-for="(item,index) in carlist" :key="item.id">
          <input v-model="item.xuanzhong" type="checkbox" class="ina">
          <img :src="item.img" alt="">
         
          <ul>
            <li>{{item.name}}：{{item.info}}</li>
            <li>数量：<button @click="btnadd(index)">-</button>{{item.count}}<button @click="btnads(index)">+</button></li>
            <li>价格：{{item.price}}</li>
          </ul>
        </div>
      </div>
       <!-- 全选按钮 -->
      <div class="leb">
        <label for="checkall" >
           <input  v-model="checkAll" type="checkbox" class="ina" id="checkall">
        </label>
        <span class="quna">全选</span>
        <div class="reg">
            <span class="jia">合计:￥{{total}}</span>
        <button>结算({{ji}})</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heder from "../components/Heder";
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
    this.carlist= localStorage['carlist']?JSON.parse(localStorage['carlist']):[]
  },
  methods: {
    btnadd(idx){
      if(this.carlist[idx].count==1){
        return;
      }
     this.carlist[idx].count --
      localStorage['carlist']=JSON.stringify(this.carlist)
    },
    btnads(idx){
      this.carlist[idx].count ++
       localStorage['carlist']=JSON.stringify(this.carlist)
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
        this.carlist.forEach(check => check.xuanzhong = val);
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
    li{
      margin: 20px 0;
      button{
        font-size: 20px;
        padding: 0 10px;
      }
    }
  }
}
  
</style>