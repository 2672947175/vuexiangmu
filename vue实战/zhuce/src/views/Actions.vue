<template>
  <div class="home">
    <div>{{this.$store.state.conut}}</div>
    <button @click="add">加1</button>
    <div>{{username}}</div>
    <button @click="getuser">获取用户名</button>

     <div>{{this.$store.state.conut}}</div>
    <button @click="addcont">点击加1</button>

    
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
export default {
  name: 'action',
  data(){
    return {}
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {
    addcont(){
      // 提交到 mutation
      this.$store.commit('ADD_COUNT')
    },
    getuser(){
      this.$store.dispatch('getUserApi')
    },
    add(){
      // 流程1
      this.$store.dispatch("actionAdd")
    }
  },
}
</script>
