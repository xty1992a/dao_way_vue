import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main.vue'
import serve from '../components/serve/serve.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/serve',
      name: 'serve',
      component: serve
    }
  ]
})
