<template>
  <div>
    <Heder>首页</Heder>
    <div class="container">
      <Banner :swiperSlides="arra"></Banner>
      <div class="lista">
        <ul>
          <li v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p>{{item.price}}$</p>  
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Heder from "../components/Heder";
import Banner from "../components/Banner";
import List from '../components/List';
import { getBannaer,getHomlist } from "../api";
// import * as Types from '../api'
// console.log(Types)
export default {
  data() {
    return {
      arra: [],
      list:[]
    };
  },
  name: "home",
  components: {
    Heder,
    Banner
  },
  created() {
    this.getSwiper()
    this.getList()
  },
  methods: {
    // 方便维护
    // 获取轮播
    async getSwiper(){
       this.arra = await getBannaer();
    },
    // 获取列表
    async getList(){
      this.list = await getHomlist();
        console.log(this.list)
    }
  }
};
</script>
<style lang="less" scoped>
  .lista{
    padding: 20px;
    box-sizing: border-box;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    img{
      max-width: 100%;
    }
    li{
      margin: 2.5%;
      width: 45%;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
</style>