<template>
  <swiper :options="swiperOption" class='xxx'>
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
    <img :src="slide" alt="">
    </swiper-slide>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
export default {
  props: ["swiperSlides"],
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style lang="less">
  .xxx{
    width: 100%;
     img{
       max-width: 100%;
       height: auto;
      display: block;
     }

  }
</style>