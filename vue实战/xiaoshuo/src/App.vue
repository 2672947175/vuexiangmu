<template>
  <div id="app">
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  name: "app",
  components: {
    Nav
  }
  
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-user-select: none;
	-moz-user-focus: none;
    -moz-user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e3e3e3;
  height: 60px;
  
  a {
    flex: 1;
     display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    i{
      font-size: 25px;
    }
  }
}

</style>
