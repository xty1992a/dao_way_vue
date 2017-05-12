<template>
  <div class="card-wrap">
    <div class="container">
      <div class="card-head">
        <h2>{{service.className}}</h2>
        <p>小时工/开荒保洁/擦玻璃/深度保洁/家居养护/空气净化/杀虫灭鼠</p>
        <div class="more">
          <a href="#">更多服务></a>
        </div>
      </div>
      <div class="card-content">
        <card v-for="(serve, index) in service.serves"
              :key='index' :serve="serve"></card>
      </div>
    </div>
  </div>
</template>

<script>
  import card from '../card/card.vue'
  export default {
    name: 'card_wrap',
    props: ['service'],
    data () {
      return {}
    },
    components: {
      card
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .d_content{
    .card-wrap{
      padding: 60px 0;

      &.white{
        background-color: #fff;
      }
      &.gray{
        background-color: rgb(251, 248, 248);
      }
      .container{
        .card-head{
          text-align: center;
          font-size: 22px;
          h2{
            color: #3d3838;
            font-weight: 800;
            font-size: 28px;
            font-family: "Microsoft YaHei";
          }
          p{
            font-size: 22px;
            color: #3d3838;
            margin-top: 15px;
          }
          .more{
            margin-top: -13px;
            text-align: right;
            a{
              color: #898989;
              font-weight: 400;
              font-size: 18px;
            }
          }
        }
        .card-content{
          margin-top: 25px;
        }
      }
    }
  }
</style>
