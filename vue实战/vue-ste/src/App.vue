<template>
  <div id="app">
    <Nav />
  </div>
</template>
<script>
import Nav from "./components/Nav";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #e3e3e3;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    flex:1;
    display: flex;
    flex-direction: column;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    i{
      font-size: 22px
    }
  }
}
.container {
  width: 100%;
  position: fixed;
  top: 50px;
  bottom: 61px;
  overflow-y: scroll;
}
</style>
