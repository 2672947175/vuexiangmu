<template>
  <div>
    <Heder>购物车</Heder>
    <div class="container">
      <!-- 购物车列表 -->
      <div class=libox>
        <div class="box" v-for="item in carlist" :key="item.id">
          <input v-model="item.sele" type="checkbox" class="ina">
          <img :src="item.img" alt="">
          <ul>
            <li>{{item.name}}：{{item.info}}</li>
            <li>数量：<button @click="miuns(item)">-</button>
            {{item.count}}
            <button @click="add(item)">+</button></li>
            <li>价格：{{item.price}}</li>
            <li><button class="san" @click="san(item)">删除</button></li>
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
            <span class="jia">合计:￥{{$store.getters.total}}</span>
        <button>结算({{$store.getters.cishus}})</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Heder from "../components/Heder";
import {mapState} from 'vuex'
export default {
  name: "carvue",
  components: {
    Heder
  },
  methods: {
    miuns(item){
       if(item.count ==1){
           return
       }
      this.$store.dispatch('miunsa',item)
    },
    add(item){
      this.$store.dispatch('adda',item)
    },
    san(item){
      this.$store.dispatch('sans',item)
      
    }
  },
  computed: {
     ...mapState(['carlist']),
    checkAll:{
      get(){
        return this.$store.getters.checkAllval
      },
      set(val){
         this.$store.dispatch('aquan',val)
      }
    }
  }
};
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
    padding-top:20px;
    box-sizing: border-box;
    li{
      margin: 10px 0;
      button{
        font-size: 20px;
        padding: 0 10px;
      }
       .san{
          font-size: 17px;
          appearance: none;
          outline: none;
          border: 1px solid #ccc;
        }
    }
  }
}
  
</style>