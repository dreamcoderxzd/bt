<template>
  <div class="title_right">
    <ul>

      <li @click="homeClick">首页</li>
      <li @click="labelClick">标签</li>
      <li>时间线</li>
      <li>留言板</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TtitleRight",
    methods:{
      homeClick(){
        this.$router.push('/home')
        console.log('home')
      },
      labelClick(){
        this.$router.push('/label')
        console.log('aaa');
      },
    },
  }
</script>

<style scoped>
  .title_right{
    align-self: center;
  }

  .title_right ul{
    display: flex;
  }


    .title_right li{
      font-size: 18px;
      font-weight: bold;
      flex: 1;
      word-break: keep-all;
      margin-right: 18px;
      list-style: none;
      padding-bottom: 5px;
      border-bottom: 2px solid #a4b6df;
    }
  .title_right li:hover{
    cursor: pointer;
  }


</style>
