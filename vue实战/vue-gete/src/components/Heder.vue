<template>
  <div class="heaerder">

    <i v-if="isshow" class="iconfont icon-mp-return-copy ass" @click="gobank" ></i>
    <!-- 头部 -->
    <!-- slot 插头 -->

    <slot></slot>
  </div>
</template>
<script>
export default {
    props:{
    isshow:{
      default:false
    }
  },
  methods: {
    gobank() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.heaerder {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #affa;
  position: relative;
  .ass{
   position: absolute;
   left: 20px;
  //  color: #fff;
    font-size: 22px;
  }
}
</style>
