<template>
  <div>
    <div class="d_banner">
      <carousel></carousel>
      <div class="container">
        <div class="banner-nav">
          <ul>
            <li class="nav-name">
              <router-link to="/serve">
                <i>家庭保洁</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=1" >小时工</router-link></li>
                <li><router-link to="/serve?class=1" >开荒保洁</router-link></li>
                <li><router-link to="/serve?class=1" >擦玻璃</router-link></li>
                <li><router-link to="/serve?class=1" >深度保洁</router-link></li>
                <li><router-link to="/serve?class=1" >家居养护</router-link></li>
                <li><router-link to="/serve?class=1" >空气净化</router-link></li>
                <li><router-link to="/serve?class=1" >杀虫灭鼠</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=2">
                <i>上门按摩</i>
                
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=2" >中医推拿</router-link></li>
                <li><router-link to="/serve?class=2" >油压/SPA</router-link></li>
                <li><router-link to="/serve?class=2" >局部理疗</router-link></li>
                <li><router-link to="/serve?class=2" >足疗套餐</router-link></li>
                <li><router-link to="/serve?class=2" >母婴保健</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=3">
                <i>上门维修</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=3" >家装家修</router-link></li>
                <li><router-link to="/serve?class=3" >手机维修</router-link></li>
                <li><router-link to="/serve?class=3" >家电维修</router-link></li>
                <li><router-link to="/serve?class=3" >电脑维修</router-link></li>
                <li><router-link to="/serve?class=3" >管道疏通</router-link></li>
                <li><router-link to="/serve?class=3" >安装打孔</router-link></li>
                <li><router-link to="/serve?class=3" >开锁换锁</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=4">
                <i>家电清洗</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=4" >空调清洗</router-link></li>
                <li><router-link to="/serve?class=4" >油烟机清洗</router-link></li>
                <li><router-link to="/serve?class=4" >洗衣机清洗</router-link></li>
                <li><router-link to="/serve?class=4" >冰箱清洗</router-link></li>
                <li><router-link to="/serve?class=4" >燃气灶清洗</router-link></li>
                <li><router-link to="/serve?class=4" >热水器清洗</router-link></li>
                <li><router-link to="/serve?class=4" >微波炉清洗</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=5">
                <i>衣物洗护</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=5" >洗衣</router-link></li>
                <li><router-link to="/serve?class=5" >洗鞋/修鞋</router-link></li>
                <li><router-link to="/serve?class=5" >家纺清洗</router-link></li>
                <li><router-link to="/serve?class=5" >箱包洗护</router-link></li>
                <li><router-link to="/serve?class=5" >定制改衣</router-link></li>
              </ul>

            </li>
            <li class="nav-name">
              <router-link to="/serve?class=6">
                <i>美容美妆</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=6" >化妆</router-link></li>
                <li><router-link to="/serve?class=6" >美容</router-link></li>
                <li><router-link to="/serve?class=6" >美体塑形</router-link></li>
                <li><router-link to="/serve?class=6" >美睫/美眉</router-link></li>
                <li><router-link to="/serve?class=6" >上门美发</router-link></li>
                <li><router-link to="/serve?class=6" >美甲</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=7">
                <i>上门医护</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=7" >护士上门</router-link></li>
                <li><router-link to="/serve?class=7" >挂号/陪诊</router-link></li>
                <li><router-link to="/serve?class=7" >私人医生</router-link></li>
                <li><router-link to="/serve?class=7" >康复陪护</router-link></li>
              </ul>

            </li>
            <li class="nav-name">
              <router-link to="/serve?class=8">
                <i>搬家速运</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=8" >搬家租车</router-link></li>
                <li><router-link to="/serve?class=8" >拆装搬运</router-link></li>
                <li><router-link to="/serve?class=8" >搬家套餐</router-link></li>
                <li><router-link to="/serve?class=8" >仓储寄存</router-link></li>
              </ul>
            </li>
            <li class="nav-name">
              <router-link to="/serve?class=9">
                <i>养车用车</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=9" >上门养车</router-link></li>
                <li><router-link to="/serve?class=9" >上门洗车</router-link></li>
                <li><router-link to="/serve?class=9" >汽车陪练</router-link></li>
                <li><router-link to="/serve?class=9" >机场泊车</router-link></li>
                <li><router-link to="/serve?class=9" >验车</router-link></li>
              </ul>

            </li>
            <li class="nav-name">
              <router-link to="/serve?class=10">
                <i>保姆月嫂</i>
              </router-link>
              <ul class="nav-list">
                <li><router-link to="/serve?class=10" >月嫂</router-link></li>
                <li><router-link to="/serve?class=10" >育儿嫂</router-link></li>
                <li><router-link to="/serve?class=10" >家务保姆</router-link></li>
                <li><router-link to="/serve?class=10" >老人陪护</router-link></li>
                <li><router-link to="/serve?class=10" >家居养护</router-link></li>
                <li><router-link to="/serve?class=10" >空气净化</router-link></li>
                <li><router-link to="/serve?class=10" >杀虫灭鼠</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d_content">
      <card-wrap v-for="(service, index) in serviceList"
                 :key="service.classType" :class="index%2?'gray':'white'"
                 :service='service'></card-wrap>
    </div>
  </div>
</template>

<script>
  import cardWrap from '../card_wrap/card_wrap.vue'
  import carousel from '../carousel/carousel.vue'
  export default {
    name: 'main',
    data () {
      return {
        serviceList: []
      }
    },
    created () {
      // 获取数据
      this.$http.get('http://localhost:3001/ajax')
          .then(res => {
            this.serviceList = res.body.services
          }, err => {
            console.log(err)
          })
    },
    components: {
      cardWrap,
      carousel
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
body{
  .d_banner{
    /*margin-top: 67px;*/
    position: relative;
    .container{
      .banner-nav{
        margin: 0 20px;
        width: 180px;
        background: #757881;
        color: #fff;
        position: relative;
        ul{
          .nav-name{
            height: 42px;
            line-height: 42px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            /*padding-left: 45px;*/
            &:hover{
              background-color: rgb(96,100,109);
              img{
                display: none;
              }
              .nav-list{
                display: block;
              }
              a{
                &:after{
                  border-right-color: #fff;
                }
                &:before{
                  border-color: transparent;
                }
              }
            }
            a{
              position: relative;
              display: inline-block;
              vertical-align: middle;
              width: 100%;
              &:after{
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 0;
                border: 6px solid transparent;
                transform: translateY(-50%);
              }
              &:before{
                border: 1px solid transparent;
                border-bottom-color: #fff;
                border-right-color: #fff;
                transform: rotate(-45deg);
                display: block;
                content: '';
                height: 5px;
                width: 5px;
                position: absolute;
                top: 40%;
                right: 30px;
              }
              i{
                margin-right: 15px;
                font-weight: bold;
                color: #fff;
                display: inline-block;
                width: 70px;
                text-align: justify;
                text-align-last: justify;
              }
            }
            img{

            }
            .nav-list{
              position: absolute;
              top: 0;
              display: none;
              background-color: rgba(255,255,255,0.7);
              height: 100%;
              width: 160px;
              left: 180px;
              li{
                height: 42px;
                line-height: 42px;
                font-size: 16px;
                position: relative;
                cursor: pointer;
                /*padding-left: 45px;*/
                a{
                  &:hover{
                    color: #e94840;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
