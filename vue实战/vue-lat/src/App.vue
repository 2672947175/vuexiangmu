<template>
  <div id="app">
      <router-view/>
      <Nav/>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  
  components:{
    Nav
  }

}
</script>
<style lang="less">
*{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}
ul li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background:#fff;
  a {
    font-weight: bold;
    color: #2c3e50;
    flex:1;
    display: flex;
    flex-direction: column;
    &.router-link-exact-active {
      color: #42b983;
    }
    i{
      font-size: 24px;
    }
  }
}
.contaric{
  width: 100%;
  position: fixed;
  top:50px;
  bottom: 50px;
  overflow-y: scroll; 
}
</style>
