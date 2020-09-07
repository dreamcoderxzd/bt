<template>
  <swiper ref="hits" class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide">
      <img src="http://image.yzforever.top/blog/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99%E7%9A%84%E4%BB%8E0%E5%88%B01/topic_image.jpg">
      <div class="swiper-slide-right">
        <p>博客网站的从0到1(感想，无技术)</p>
        <p>杂技</p>
        <p>2020-09-08</p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="http://image.yzforever.top/blog/%E5%8D%9A%E5%AE%A2%E6%89%80%E7%94%A8%E7%9A%84%E6%8A%80%E6%9C%AF/topic_image.jpg">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="http://image.yzforever.top/blog/%E5%AE%9E%E4%B9%A0/topic_image.jpg">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    name: "HomeSwiper",
    components: {
      Swiper, SwiperSlide
    },
    data(){
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {

            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            autoplayDisableOnInteraction:false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods:{
      prev(){
        this.$refs.hits.$swiper.slidePrev();
      },
      next(){
        this.$refs.hits.$swiper.slideNext();
      },
    }
  }
</script>

<style scoped>
  .swiper{
    height: 380px;
  }

  .swiper-slide{
    display: flex;
  }
  .swiper-slide-right{
    margin:   auto;
    display: flex;
    flex-direction: column;
  }


  .swiper-slide-right p:first-child{
    font-size: 35px;
    font-weight: bold;
    margin: 0;
  }

  .swiper-slide-right p:last-child{
    margin: 0;
  }


  .swiper img{
    width: 53%;
    height:100%;
    border-radius: 10px;
  }
</style>
