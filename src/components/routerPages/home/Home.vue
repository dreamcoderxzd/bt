<template>
  <div>
    <home-swiper/>
    <home-body/>
  </div>
</template>

<script>

  import HomeSwiper from "./HomeSwiper";
  import HomeBody from "./HomeBody";
  export default {
    name: "Home",
    components:{
      HomeSwiper,
      HomeBody
    }
  }
</script>


<style scoped>

</style>
