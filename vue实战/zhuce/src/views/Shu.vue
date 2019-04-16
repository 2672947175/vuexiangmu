<template>
  <div class="home">
  
  
  <!-- <button @click="minus(4)"> <span>-</span></button> -->
   <button @click="minu(da)"> <span>-</span></button>
   {{conut}} 
  <button @click="btn"> <span>+</span></button>
  <div>{{fun}}</div>
 

  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations} from 'vuex'
export default {
  name: 'shu',
  components: {
    
  },
  computed: {
    // ...mapState({
    //   conut:state=>state.conut
    // })
    ...mapState(['conut']),
    ...mapGetters(['fun'])

  },
  data(){
    return {
      da:1,
    }
  },
  created() {
   this.da=5
  },
  methods: {
    // 
    ...mapMutations(['minu']),
  
    btn(){
      // 把事件提交给vuex mutations去处理
      // this.$store.commit('conut',2)
      // commit 里面只能穿一个参数 多个参数只能对象
      // this.$store.commit('conut',{a:2,b:4})
      this.$store.commit('conut')
      // this.$store.commit('conut')

    }
  },
}
</script>
