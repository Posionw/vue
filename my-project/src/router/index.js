import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Daytrip from '@/pages/daytrip/index'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: Index
	},{
		path: '/Daytrip/:id',
		name: 'Daytrip',
		component: Daytrip
	}]
})