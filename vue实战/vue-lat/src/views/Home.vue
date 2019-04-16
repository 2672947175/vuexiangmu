<template>
  <div >
    <Header>首页</Header>
    <div class="contaric">
       <Banner :banners='banners'></Banner>
      <div>
          <div v-for="(item,index) in lists" :key="index">
            <img :src="item.img">
          </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import {getBanner,getList} from '../api'

export default {
  data() {
    return {
      banners: [],
      lists:[]
    };
  },
  name: "home",
  components: {
    Header,
    Banner
  },
  created() {
    this.getSwiper()
    this.getLists();
  },
  methods: {
    async getSwiper(){
      this.banners = await getBanner()
      console.log(this.banners)
    },
    async getLists(){
      this.lists = await getList()
      console.log(this.lists)
    }
  }
};
</script>
