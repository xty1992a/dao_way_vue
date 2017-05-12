<template>
  <a href="#" class="card">
    <img :src="serve.avatar" alt="">
    <p class="serviceName">{{serve.name}}</p>
    <p class="description">{{serve.serveDesribe.text}}</p>
    <div class="price">
      <span>
        <span>{{serve.price}}</span>元/小时
      </span>
      <span class="btn btn-danger">查看详情</span>
    </div>
  </a>
</template>

<script>
  export default {
    props: ['serve'],
    data () {
      return {}
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .card{
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    display: inline-block;
    background: #fff;
    cursor: pointer;
    padding: 10px;
    margin: 0 5px;
    height: 345px;
    width: 230px;
    &:hover{
      box-shadow: 5px 5px 15px 0 #ccc;
    }
    img{
      width: 100%;
    }
    p{
      &.serviceName{
        font-size: 16px;
        padding: 10px 0 0;
        font-weight: 700;
        height: 28px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &.description{
        color: #929292;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 13px;
        white-space: nowrap;
        line-height: 18px;
        /*margin-bottom: 15px;*/
      }
    }
    .price{
      color: #e94840;
      padding: 0 5px;
      line-height: 24px;
      display: flex;
      font-size: 15px;
      font-weight: bold;
      justify-content: space-between;
      span{
        span{
          font-size: 20px;
        }
      }
    }
  }
</style>
