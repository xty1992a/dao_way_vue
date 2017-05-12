<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/header/header.vue'
  import vFooter from './components/footer/footer.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    methods: {
      listenScroll () {
        if (document.body.scrollTop > 70) {
          document.querySelector('.header_nav').classList.add('show')
        } else {
          document.querySelector('.header_nav').classList.remove('show')
        }
      }
    },

    created () {
      document.addEventListener('scroll', this.listenScroll)
    },
    components: {
      vHeader,
      vFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
