<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Login/> -->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from "./login.vue"
// import Main from "./components/Main.vue"
export default {
  name: 'App',
  components: {
    // Login,
    // Main
    // HelloWorld
  }
}
</script>

<style>
html,body,#app{
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
