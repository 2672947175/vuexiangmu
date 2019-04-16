<template>
  <div>
    <Heder>首页</Heder>
    <div class="container">
      <div v-if="loading">
        <Loading></Loading>
      </div>
      <template v-else>
        <Banner :swiperSlides="arra"></Banner>
        <div class="lista">
          <ul>
            <li
              v-for="item in list"
              :key="item.id"
            >
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p>{{item.info}}</p>
              <p>{{item.price}}$</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Heder from "../components/Heder";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import { getHomeAll } from "../api";
// import * as Types from '../api'
// console.log(Types)
export default {
  data() {
    return {
      arra: [],
      list: [],
      loading: true
    };
  },
  name: "home",
  components: {
    Heder,
    Banner,
    Loading
  },
  created() {
    this.getAll();
  },
  methods: {
    // 获取首页的所有数据列表
    async getAll() {
      [this.arra, this.list] = await getHomeAll();
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
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
    margin: 2.5%;
    width: 45%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>