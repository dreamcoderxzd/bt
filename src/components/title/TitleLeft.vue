<template>
  <div class="title_left">
    <img src="../../assets/c_title/moon.svg" alt="">
    <p class="title_left_text">Fighting</p>
  </div>
</template>

<script>
  export default {
    name: "TitleLeft"
  }
</script>

<style scoped>
  .title_left{
      display: flex;
      align-self: center;
  }

  .title_left_text{
    display: inline-block;
    text-align: center ;
    flex: 1;
  }
</style>
