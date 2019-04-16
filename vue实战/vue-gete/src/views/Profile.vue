<template>
  <Heder>我的</Heder>
</template>

<script>
import Heder from "../components/Heder";
export default {
  name: "profile",
  data(){
    return {
      id:{}
    }
  },
  components: {
    Heder
  },
   created(){
      let id = this.$route.params.jis
       console.log(id)
    },
    mounted(){
     
    }
};
</script>