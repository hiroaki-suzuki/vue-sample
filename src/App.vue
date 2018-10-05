<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Modal</router-link>
      <router-link to="/tabs">Tab</router-link>
      <router-link to="/store">Store</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
