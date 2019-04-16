<template>
  <div class="home">
      {{conut}}
      <input type="text" :value="conut" @input="changeconut">
      <input v-model="message">
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'form',
  data(){
    return {}
  },
  computed: {
 message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
        console.log(value)
      this.$store.commit('updateMessage', value)
    }
  },
    ...mapState(['conut'])
    
  },



  methods: {
    changeconut(e){
        let val = e.target.value
        this.$store.commit('changeconut',val)
    }
  }
}
</script>
