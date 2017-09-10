<template>
  <div id="app">
  <el-collapse-transition>
    <router-view></router-view>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  color: #222;
  font-family: Microsoft YaHei, Helvitica, Verdana, Tohoma, Arial, san-serif; 
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
