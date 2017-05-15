<template>
  <div class="paging">
    <!--小于10页的情况-->
    <div v-if="max<10">
      <i class="page un-able" @click="move(true)">&lt;上一页</i>
      <i class="page" :class="index==current?'active':''"
         v-for="index in max" @click="change(index)">{{index}}</i>
      ...
      <i class="page" @click="move(false)">下一页&gt;</i>
    </div>
    <div v-if="max>=10">
      <i class="page un-able" @click="move(true)">&lt;上一页</i>
      <i class="page" :class="index==current?'active':''"
         v-for="index in 3" @click="change(index)">{{index}}</i>
      {{current>9?'...':''}}
      <i class="page" :class="index==current?'active':''"
         v-for="index in 3" @click="change(index)">{{index}}</i>

      <i class="page" @click="move(false)">下一页&gt;</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    props: ['current', 'max'],
    data: function () {
      return {
        showItem: 9,
        allpage: 30
      }
    },
    computed: {

    },
    methods: {
      change: function (index) {
        console.log(index, 'change')
        this.$emit('goto', index - 1)
      },
      move (isPrev) {
        var index = isPrev ? this.current - 1 : this.current + 1
        console.log(index, 'move', this.current)
        this.change(index)
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .paging{
    &:first-child{
      line-height: 60px;
      float: right;
      font-size: 12px;
    }
    &:last-child{
      background-color: #f8f8f8;
      line-height: 60px;
      font-size: 12px;
      text-align: center;
      .page{
        width: auto;
        background-color: #fff;
        padding: 0 13px;
        margin: 50px 6px;
      }
    }
    .page{
      display: inline-block;
      width: 70px;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #e5e5e5;
      margin:0 10px 0 12px;
      color: #121212;
      &.un-able{
        color: #929292 !important;
      }
      &.count{
        color: #e94840;
      }
      &.active{
        background-color: #e94840;
        color: #fff;
      }
    }
  }
</style>
