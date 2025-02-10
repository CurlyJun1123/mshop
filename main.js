import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import Config from './common/js/config.js'
import Http from './common/js/http.js'
import Util from './common/js/util.js'
import store from './store'

import enUs from './lang/en-us/common.js'
import zhCn from './lang/zh-cn/common.js'

const messages = {
  en: enUs,
  'zh-CN': zhCn,
  'zh-Hans': zhCn
}

let i18nConfig = {
  locale: uni.getLocale(), // 获取已设置的语言
  fallbackLocale: 'zh-CN',
  messages
}

Vue.prototype.$store = store //挂在vue

Vue.config.productionTip = false

Vue.prototype.$util = Util
Vue.prototype.$api = Http

Vue.prototype.$config = Config

App.mpType = 'app'

//常用组件
import loadingCover from '@/components/loading-cover/loading-cover.vue'
Vue.component('loading-cover', loadingCover)

import nsEmpty from '@/components/ns-empty/ns-empty.vue'
Vue.component('ns-empty', nsEmpty)

import MescrollUni from '@/components/mescroll/my-list-mescroll.vue'
Vue.component('mescroll-uni', MescrollUni) //上拉加载,下拉刷新组件

import MescrollBody from '@/components/mescroll/mescroll-body.vue'
Vue.component('mescroll-body', MescrollBody)

Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)

const app = new Vue({
  ...App,
  i18n,
  store
})
app.$mount()
