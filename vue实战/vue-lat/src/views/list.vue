<template>
  <div>
      <Header>列表</Header>
      <div class="contaric">
        <ul>
          <li v-for="item in arr" :key="item.id">
            {{item.name}}
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import {getpage} from '../api'
export default {
  name: 'List',
  data(){
    return {
      arr:[],
      da:1
    }
  },
  components:{
      Header
  },
  created() {
    this.getA()
  },
  methods: {

    async getA(){
      let {hasmort,pagedata}=await getpage(this.da)
      console.log(pagedata)
      this.arr.push(pagedata)
    }
  },
}
</script>
