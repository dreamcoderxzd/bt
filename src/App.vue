<template>
  <div id="app">
    <Title/>
    <router-view></router-view>
  </div>
</template>

<script>
import Title from "./components/title/Title";
import Home from "./components/routerPages/home/Home";
import Label from "./components/routerPages/labels/Label";
export default {
  name: 'App',
  components:{
    Title,
    Home,
    Label
  },
}


</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
