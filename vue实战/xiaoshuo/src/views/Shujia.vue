<template>
  <div>
    <div class="heder">
      <div class="shou">
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-more"></i>
      </div>
    </div>
    <div class="container">
        
    </div>
  </div>
</template>

<script>


export default {
  name: 'shujia',
  components: {
  
  }
}
</script>
<style lang="less">
  .heder{
    width: 100%;
    height: 60px;
    position: fixed;
    top:0;
    background: #eeeeee;
   
  }
  .shou{
    float: right;
    i{
      font-size: 25px;
      line-height: 60px;
      padding:  0 10px;
    }
  }
  .container{
    width: 100%;
    position: fixed;
    top:60px;
    bottom: 60px;
    background: #fffccc;
    overflow-y: scroll;
    // overflow-y: visible;
    
  }
   .container::-webkit-scrollbar {
        display: none;
    }
 
</style>
