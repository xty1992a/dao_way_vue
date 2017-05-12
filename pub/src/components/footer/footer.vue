<template>
  <footer class="d_footer">
    <div class="baozhang" id="baozhang">
      <h2>到位<i>服务</i>保障</h2>
      <p>到位平台担保交易安全，交易未成功100%退款</p>
      <div class="ticket-wrap">
        <div class="ticket">
          <img src="./quan.png" alt="">
          <p>服务好</p>
        </div>
        <div class="ticket">
          <img src="./quan.png" alt="">
          <p>上门快</p>
        </div>
        <div class="ticket">
          <img src="./quan.png" alt="">
          <p>有保障</p>
        </div>
      </div>
    </div>
    <div class="cities">
      <div class="container">
        <dl class="city-list clearfix">
          <dt>热门城市</dt>
          <dd>
            <ul class="clear">
              <li><a href="#">北京</a></li>
              <li><a href="#">上海</a></li>
              <li><a href="#">广州</a></li>
              <li><a href="#">深圳</a></li>
              <li><a href="#">成都</a></li>
              <li><a href="#">天津</a></li>
              <li><a href="#">南京</a></li>
              <li><a href="#">杭州</a></li>
              <li><a href="#">重庆</a></li>
              <li><a href="#">苏州</a></li>
              <li><a href="#">武汉</a></li>
              <li><a href="#">长沙</a></li>
              <li><a href="#">济南</a></li>
              <li><a href="#">郑州</a></li>
              <li><a href="#">西安</a></li>
              <li><a href="#">沈阳</a></li>
              <li><a href="#">福州</a></li>
              <li><a href="#">厦门</a></li>
              <li><a href="#">南昌</a></li>
              <li><a href="#">合肥</a></li>
              <li><a href="#">宁波</a></li>
              <li><a href="#">无锡</a></li>
              <li><a href="#">青岛</a></li>
              <li><a href="#">大连</a></li>
              <li><a href="#">东莞</a></li>
              <li><a href="#">佛山</a></li>
              <li><a href="#">石家庄</a></li>
              <li><a href="#">哈尔滨</a></li>
              <li><a href="#">太原</a></li>
              <li><a href="#">昆明</a></li>
              <li><a href="#">贵阳</a></li>
              <li><a href="#">南宁</a></li>
              <li><a href="#">温州</a></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <div class="beian gray">
      <p>©2015 版权所有 到位 daoway.com 京ICP备15001471号-1</p>
      <p>北京邻家科技有限公司 </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {}
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .d_footer{
    background-color: #fff;
    text-align: center;
    .baozhang{
      padding-top: 60px;
      text-align: center;
      h2 {
        font-size: 28px;
        font-weight: 800;
        i{
          font-size: 28px;
          font-weight: 800;
          color: #e94840;
        }
      }
      p{
        margin-top: 10px;
      }
      .ticket-wrap{
        margin-top: 68px;
        text-align: center;
        .ticket{
          width: 280px;
          display: inline-block;
        }
      }
    }
    .cities{
      padding: 50px 40px 15px;
      .city-list{
        dt{
          float: left;
          width: 100px;
          font: bold 13px/1.4 'Microsoft YaHei';
        }
        dd{
          width: 1100px;
          float: right;
          ul{
            overflow: hidden;
            li{
              float: left;
              height: 30px;
              text-align: center;
              width: 100px;
              a{
                font: 200 16px 'Microsoft YaHei';
                font-size: 16px;
                color: #898989;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .beian{
      background-color: #f8f8f8;
      padding: 40px 0 20px;
      p{
        color: #898989;
        font: 200 15px/30px 'Microsoft YaHei';
      }
    }
  }
</style>
