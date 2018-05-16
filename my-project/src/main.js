// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import '@/assets/css/rest.css'
import '@/assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from '@/store'

FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_150x150_821b641d.jpg',
  loading: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
  attempt: 1
})



/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store:store,
	components: {App},
	template: '<App/>'
})