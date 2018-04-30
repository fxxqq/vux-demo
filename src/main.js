// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import jobs from '@/components/jobs/jobs'
import info from '@/components/info/info'
import my from '@/components/my/my'
import utils  from '@/components/utils'    //获取url参数
 

Vue.use(VueRouter)
Vue.prototype.$utils=utils  //注册全局方法
const routes = [{
  path: '/',
  component: jobs
},{
  path: '/jobs/:weixinOpenId',
  component: jobs
},{
  path: '/info/:weixinOpenId/:id',
  component: info
},{
  path: '/my/:weixinOpenId',
  component: my
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
