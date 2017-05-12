<template>
  <header class="d_header">
    <div class="header_nav">
      <div class="container clearfix">
        <div class="logo">
          <a href="#">
            <img src="./logo.png" alt="">
          </a>
        </div>
        <ul class="nav_list">
          <li id="position" class="nav_item positon">
            <a href="#">
              <img src="./citypoint.png" alt="">
              <span class="city">北京</span>
              <span class="show-city">切换城市</span>
            </a>
          </li>
          <li class="nav_item"><a href="#">首页</a></li>
          <li class="nav_item"><a href="#">下载APP</a></li>
          <li class="nav_item"><a href="#">服务商</a></li>
          <li class="nav_item"><a href="#">商家入驻</a></li>
          <li class="nav_item"><a href="#">关于我们</a></li>
          <li class="nav_item">
            <a id="login" href="#">商家登录</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {}
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .d_header{
    .header_nav{
      padding: 11px 0 15px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
      background-color: rgba(255,255,255,.95);
      transition: .5s;
      transform-origin: top;
      z-index: 99;
      top:0;
      left: 0;
      right: 0;
      a{
        font-weight: bold;
      }
      .logo{
        float: left;
        margin-left: 10px;
      }
      .nav_list{
        margin-right: 20px;
        float: right;
        overflow: hidden;
        font-size: 16px;
        font-weight: bold;
        #position{
          height: 42px;
          margin-right: 50px;
          .show-city{
            color: #888;
          }
        }
        .nav_item{
          float: left;
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          #login{
            background-color: #e94840;
            border-radius: 6px;
            padding: 2px 6px;
            color: #fff;
          }
          a{
            display: inline-block;
            padding: 2px 0px;
            height: 22px;
            line-height: 22px;
          }
          span{
            font-weight: bold;
            color: #000;
            height: 40px;
            line-height: 40px;
            display: inline-block;
          }
        }
      }

    }
  }
</style>
