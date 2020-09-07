<template>
    <div class="home-body">
        <div class="home-body-item">
            <div class="home-body-item-left">
              <h3>hexo本地图片导入</h3>
              <div class="home-body-item-left-div1">
                <p>hexo</p>
              </div>
              <p>之前一直没找到hexo文档引入本地图片的方法，原来是需要安装插件的</p>
              <div class="home-body-item-left-div2">
                <p>2020-09-04</p>
                <ul>
                  <li>55</li>
                  <li>44</li>
                  <li>33</li>
                </ul>
              </div>
            </div>
            <div class="home-body-item-right">
            <img src="http://image.yzforever.top/blog/hexo%E5%BB%BA%E7%AB%99/topic_image.png">
          </div>
        </div>
      <div class="home-body-item">
        <div class="home-body-item-left">
          <h3>hexo本地图片导入</h3>
          <div class="home-body-item-left-div1">
            <p>hexo</p>
          </div>
          <p>之前一直没找到hexo文档引入本地图片的方法，原来是需要安装插件的</p>
          <div class="home-body-item-left-div2">
            <p>2020-09-04</p>
            <ul>
              <li>55</li>
              <li>44</li>
              <li>33</li>
            </ul>
          </div>
        </div>
        <div class="home-body-item-right">
          <img src="http://image.yzforever.top/blog/%E6%B5%85%E6%9E%90vue%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86/topic_image.jpg">
        </div>
      </div>
      <div class="home-body-item">
        <div class="home-body-item-left">
          <h3>hexo本地图片导入</h3>
          <div class="home-body-item-left-div1">
            <p>hexo</p>
          </div>
          <p>之前一直没找到hexo文档引入本地图片的方法，原来是需要安装插件的</p>
          <div class="home-body-item-left-div2">
            <p>2020-09-04</p>
            <ul>
              <li>55</li>
              <li>44</li>
              <li>33</li>
            </ul>
          </div>
        </div>
        <div class="home-body-item-right">
          <img src="http://image.yzforever.top/blog/hexo%E5%BB%BA%E7%AB%99/topic_image.png">
        </div>
      </div>
      <div class="home-body-item">
        <div class="home-body-item-left">
          <h3>hexo本地图片导入</h3>
          <div class="home-body-item-left-div1">
            <p>hexo</p>
          </div>
          <p>之前一直没找到hexo文档引入本地图片的方法，原来是需要安装插件的</p>
          <div class="home-body-item-left-div2">
            <p>2020-09-04</p>
            <ul>
              <li>55</li>
              <li>44</li>
              <li>33</li>
            </ul>
          </div>
        </div>
        <div class="home-body-item-right">
          <img src="http://image.yzforever.top/blog/hexo%E5%BB%BA%E7%AB%99/topic_image.png">
        </div>
      </div>
      <div class="home-body-item">
        <div class="home-body-item-left">
          <h3>hexo本地图片导入</h3>
          <div class="home-body-item-left-div1">
            <p>hexo</p>
          </div>
          <p>之前一直没找到hexo文档引入本地图片的方法，原来是需要安装插件的</p>
          <div class="home-body-item-left-div2">
            <p>2020-09-04</p>
            <ul>
              <li>55</li>
              <li>44</li>
              <li>33</li>
            </ul>
          </div>
        </div>
        <div class="home-body-item-right">
          <img src="http://image.yzforever.top/blog/hexo%E5%BB%BA%E7%AB%99/topic_image.png">
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "HomeBody"
  }
</script>

<style scoped>
  .home-body{
    width: 75%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 8px;
    bottom: 70px;
  }

  .home-body-item {
    padding-bottom: 10px;
    border-radius: 10px;
    display: flex;
    height: 270px;
    justify-content: space-between;
    transition:all 0.6s;
  }

  .home-body-item:hover{
    box-shadow: 0 0 15px 5px #c1c4ce;
  }



  .home-body-item img:hover{
      box-shadow: 0 0 10px 1px #c1c4ce;
      transform: scale(1.02);
  }

  .home-body-item-left{
    flex: 1.3 1 0%;
    padding:25px 20px;
    display: flex;
    flex-direction: column;
  }



  .home-body-item-left-div1 p{
    width: 46px;
    border-radius: 8px;
    background-color: rgb(238, 233, 228);
    padding: 5px;
    text-align: center;
  }

  .home-body-item-left-div2 {
    display: flex;
    justify-content: space-between;
  }

  .home-body-item-left-div2 ul{
    display: flex;
    justify-content: flex-end;
  }
  .home-body-item-left-div2 li{
    list-style: none;
    margin-left: 20px;
  }

  .home-body-item-left h3{
    font-size: 25px;
  }

  .home-body-item-right{
    margin: 5px;
    flex: 1 1 0%;
  }

  .home-body-item-right img{
    transition: all 0.6s;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }


</style>
