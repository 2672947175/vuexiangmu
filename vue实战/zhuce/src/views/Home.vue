<template>
  <div class="home">
    哈哈哈
    <!-- {{this.$store.state.a}} -->
    {{bcd}}
    {{$store.getters.b}}
    <!-- 直接使用 -->
   <!-- {{$store.getters.fiary}} -->
   <!-- 在computed里面处理 后在使用-->
   {{fiary}}
    {{ary}}
    <div v-for="(item,index) in ary" :key='index'>
    {{item}}
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'home',
  data(){
    return {
      arraa:[1,2,3]
    }
  },

  components: {
    
  },
  computed: {
    ...mapState(['ary']),
    // 长开运算符...mapState([]||{}) 里面可以是数组，也可以是对象对象可以改名字
    // ...mapState(['a'])
    // 对象的写法可以改名字
    ...mapState({
      bcd:state=>state.a
    }),
    
    // 映射到组件上去使用
    // 写法 1.
    // ...mapGetters(['fiary'])
     // 写法 2.
    // ...mapGetters({
    //   fiar:"fiary"
    // }),
    // 写法 3.
    fiary(){
      return this.$store.getters.fiary
    }

  }
}
</script>

