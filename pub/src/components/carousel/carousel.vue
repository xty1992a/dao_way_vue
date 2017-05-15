<template>
  <div class="carousel-wrap" @mouseover="stop(true)" @mouseout="stop(false)">
    <ul class="carousel">
      <li class="carousel-item" v-for="(banner, index) in bannerArr" ref="banner"
          :style="{background: 'url('+banner+') no-repeat center center'}"></li>
    </ul>
    <div class="point-wrap">
      <a href="javascript:;" :style="{background:index===2?'#fff':''}"
         v-for="(banner, index) in bannerArr" ref="point"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    props: ['service'],
    data () {
      return {
        bannerArr: [
          'http://www.daoway.cn/pcimages/banner1.jpg',
          'http://www.daoway.cn/pcimages/banner2.jpg',
          'http://www.daoway.cn/pcimages/banner3.jpg'
        ]
      }
    },
    methods: {
      changeImg (num) {
        var carousels = this.$refs.banner
        var points = this.$refs.point
        carousels.forEach((carousel, index) => {
          points[index].style.background = '#ccc'
          carousel.style.opacity = 0
        })
        points[num].style.background = '#fff'
        carousels[num].style.opacity = 1
      },
      carousel () {
        var num = 0
        var interID = setInterval(() => {
          this.changeImg(num)
          num++
          if (num >= 3) {
            num = 0
          }
        }, 5000)
        return interID
      },
      stop (isStop) {
        if (isStop) {
          clearInterval(this.interID)
          console.log('stop')
        } else {
          this.interID = this.carousel()
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this.interID = this.carousel()
      })
    },
    destroyed () {
      clearInterval(this.interID)
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .carousel-wrap {
    position: absolute;
    height: 420px;
    width: 100%;
    z-index: 0;
    .carousel {
      position: absolute;
      height: 420px;
      width: 100%;
      left: 0;
      top: 0;
      .carousel-item {
        top: 0;
        left: 0;
        position: absolute;
        height: 420px;
        width: 100%;
        transition: 1s linear;
      }
    }
    .point-wrap {
      position: absolute;
      z-index: 22;
      bottom: 20px;
      height: 20px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      a {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 2px;
        border-radius: 50%;
        background-color: #ccc;
      }
    }
  }
</style>
