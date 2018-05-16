import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/index/index'
// import Daytrip from '@/pages/daytrip/index'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: () => import('@/pages/index/index')
	},{
		path: '/city',
		name: 'City',
		component: () => import('@/pages/city/index')
	},{
		path: '/Daytrip/:id',
		name: 'Daytrip',
		// component: Daytrip
		component: () => import('@/pages/daytrip/index')
	}]
})