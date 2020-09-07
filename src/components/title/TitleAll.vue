<template>
  <div class="title_all">
    <slot></slot>
  </div>
</template>

<script>


  export default {
    name: "TitleAll",

  }
</script>

<style scoped>
  .title_all{
    padding: 0 170px;
    height: 160px;
    background-color: #c1c4ce;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }










  /*.title_all{*/
  /*  height: 160px;*/
  /*  width: 100%;*/
  /*  background-color: aquamarine;*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*  padding-top: 0;*/
  /*  padding-left: 170px;*/
  /*  padding-right: 170px;*/
  /*  margin: 0 auto;*/
  /*  display: flex;*/
  /*  */
  /*}*/
</style>
