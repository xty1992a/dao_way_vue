<template>
  <div>
    <div class="s_nav">
    <div class="container">
      <div class="nav_title clearfix">
        <div class="title">
          所有分类
          <i>&gt;</i>
          <i class="now">家庭保洁</i>
          <i>&gt;</i>
        </div>
      </div>
      <div class="nav_wrap">
        <ul class="nav_list clearfix">
          <li class="nav_item"><router-link to="/">分类</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1">全部</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=小时工" >小时工</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=开荒">开荒保洁</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=擦玻璃">擦玻璃</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=深度保洁">深度保洁</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=家居养护">家居养护</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=空气净化">空气净化</router-link></li>
          <li class="nav_item"><router-link to="/serve?class=1&type=杀虫灭鼠">杀虫灭鼠</router-link></li>
        </ul>
      </div>
    </div>
  </div>
    <div class="s_content">
    <div class="container clearfix">
      <div class="s-left">
        <div class="select clearfix">
          <div class="paging">
            <span id="page" class="count">1</span>/<i id="pages">11</i>
            <span class="page un-able">上一页</span>
            <span class="page">下一页</span>
          </div>
          <div class="arrange">
            <ul class="arrange-list">
              <li class="active">推荐排序</li>
              <li class="tick">销量高</li>
              <li class="tick">好评多</li>
              <li class="tick">上门快</li>
              <li class="tick">价格低</li>
            </ul>
          </div>
        </div>
        <div class="serve-tab-wrap">

          <div class="serve-tab clearfix" v-if="serviceList"
               v-for="serve in showList[index]">
            <img :src="serve.avatar" alt="">
            <div class="s-describe">
              <h4>{{serve.className}}</h4>
              <p>{{serve.text.replace(/\<.*\>/, '')}}</p>
              <p>
                <span class="nowPic">{{serve.price}}</i></span>
                <span class="oldPic"><i>{{serve.oldPrice}}</i></span>
              </p>
              <p class="seller">
              <span>
                <img src="http://www.daoway.cn/pcimages/home1.png">
                {{serve.seller}}
              </span>
                <span>已售<i>{{serve.selleCount}}</i></span>
                <span>好评<i>{{serve.receive}}</i></span>
              </p>
            </div>
            <div class="d_icon quick">
              <span>最快上门</span>
              <span>2小时</span>
            </div>
          </div>

        </div>
        <pagination :current="index+1" :max="10" @goto="goShow"></pagination>
      </div>
      <div class="s-right">
        <h3>服务商</h3>
        <div class="seller-item">
          <img src="./2.jpg" alt="">
          <p>云家政</p>
          <p>
          <span>
            已成功接单<i>22674</i>
          </span>
            <span>
            好评<i>87</i>%
          </span>
          </p>
        </div>
        <div class="seller-item">
          <img src="./2.jpg" alt="">
          <p>云家政</p>
          <p>已成功接单<i>22674</i>好评<i>87</i>%</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import pagination from '../pagination/pagination.vue'
  export default {
    data () {
      return {
        serviceList: null,
        index: 0
      }
    },
    created () {
      var url = 'http://localhost:3001/ajax/serve?class=' + this.$route.query.class
      console.log(url)
      this.$http.get(url)
          .then(res => {
            var resData = res.body.result
            if (resData) {
              window.sessionStorage.serveList = JSON.stringify(res.body.result)
              this.serviceList = resData
            }
          }, err => {
            console.log(err)
          })
    },
    methods: {
      goShow (index) {
        this.index = index
      }
    },
    computed: {
      showList () {
        var result = []
        var data = this.serviceList
        if (data) {
          while (data.length) {
            result.push(data.splice(0, 10))
          }
        }
        return result
      }
    },
    components: {
      pagination
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
body{
  background: #f8f8f8;
  .s_nav{
    .container{
      .nav_title{
        .title{
          line-height: 85px;
          font: bold 18px 'Microsoft YaHei';
          float: left;
          i{
            margin: 0 10px;
            color: #929292;
            &.now{
              font: bold 18px/85px 'Microsoft YaHei';
              color: #e94840;
              margin: 0;
            }
          }
        }
      }
      .nav_wrap{
        background-color: #fff;
        border: 1px solid #eee;
        .nav_list{
          .nav_item{
            float: left;
            color: #333;
            font: 200 16px/1.5 'Microsoft YaHei';
            line-height: 50px;
            margin: 0 10px;
            &:nth-child(1){
              height: 50px;
              text-align: right;
              width: 80px;
              margin-right:20px ;
              color: #a9a9a9;
            }
            a{
              color: #333;
              font-weight: 200;
              &.red{
                color: #e94840;
              }
            }
          }
        }
      }
    }
  }
  .s_content{
    margin: 10px 0 50px;
    .s-left{
      width: 960px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      float: left;
      .select{
        .arrange{
          height: 60px;
          .arrange-list{
            li{
              display: inline-block;
              margin: 0 20px;
              float: left;
              font: 200 16px/55px 'Microsoft YaHei';
              border-bottom: 4px solid transparent;
              box-sizing: border-box;
              cursor: pointer;
              &.tick{
                &:after{
                  content: '';
                  display: inline-block;
                  width: 6px;
                  height: 6px;
                  border: 2px solid #999;
                  border-left-color: transparent;
                  border-top-color: transparent;
                  transform: rotate(45deg);
                  margin-left: 6px;
                }
              }
              &.active{
                color: #fb474f !important;
                border-color: #fb474f !important;
              }
              a{
                float: left;
                font: 200 16px/55px 'Microsoft YaHei';
                border-bottom: 4px solid transparent;
                box-sizing: border-box;
                margin: 0 20px;
                &.active{
                  color: #fb474f !important;
                  border-color: #fb474f !important;
                }
                img{
                  margin-left:4px;
                }
              }
            }
          }
        }

      }
      .serve-tab-wrap{
        .serve-tab{
          cursor: pointer;
          margin-bottom: -1px;
          border-bottom: 1px solid #eee;
          &:hover{
            background-color: #f8f8f8;
          }
          >img{
            width: 140px;
            margin: 30px;
            float: left;
          }
          .s-describe{
            padding-top: 40px;
            float: left;
            width: 50%;
            text-align: left;
            p{
              color: #929292;
              font: 200 14px/42px 'Microsoft YaHei';
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &.seller{
                span{
                  margin-right: 15px;
                  img{
                    width: 18px;
                    height: 17px;
                  }
                }
              }
              span{
                &.oldPic{
                  text-decoration: line-through;
                  margin-left: 40px;
                }
                &.nowPic{
                  font: bold 20px 'Microsoft YaHei';
                  color: #e94840;
                  i{
                    font-size: 14px;
                  }
                }
              }
            }
          }
          .d_icon{
            margin: 20px 60px 0 0;
            text-align: center;
            float: right;
            &.quick{
              border-radius: 6px;
              border: 1px solid #e94840;
              font: 200 12px/15px 'Microsoft YaHei';
              color: #e94840;
              height: 30px;
              width: 60px;
              span{
                width: 100%;
                display: inline-block;
                &:first-child{
                  background-color: #e94840;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .s-right{
      background-color: #fff;
      border: 1px solid #eee;
      float: right;
      width: 230px;
      h3{
        font: bold 20px/60px 'Microsoft YaHei';
        border-bottom: 1px solid #e5e5e5;
        padding-left: 10px;
        text-align: left;
      }
      .seller-item{
        height: 200px;
        text-align: center;
        &:hover{
          background-color: #f8f8f8;
        }
        img{
          margin: 30px 0 10px;
          width: 70px;
        }
        p{
          font: bold 16px/34px 'Microsoft YaHei';
          text-align: center;
          margin-bottom: 6px;
          &:last-child{
            width: 90%;
            color: #999;
            display: flex;
            margin: 0 auto;
            padding: 0 10px;
            text-align: justify;
            box-sizing: border-box;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            font: 200 14px/48px 'Microsoft YaHei';
          }
          span{
            i{

            }
          }
        }
      }
    }
  }
}
</style>
