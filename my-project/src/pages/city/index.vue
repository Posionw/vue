<template>
	<div class="main">
		<city-header></city-header>
		<city-search></city-search>
		<city-list class="list"
				   :hotcity="hotcity">
		</city-list>
	</div>
</template>
<script>
	// import cityHeader from './header.vue'
	import axios from 'axios'
	export default{
		name:'city',
		data(){
			return {
				list:[],
				hotcity:[]
			}
		},
		components:{
			CityHeader:() => import('./header.vue'),
			CitySearch:() => import('./search.vue'),
			CityList:() => import('./list.vue')
		},
		methods:{
			getListInfo (){
				axios.get('/api/city.json')
					.then(this.handleGetListSucc.bind(this))
					.catch(this.handleGetListErr.bind(this))
			},
			handleGetListSucc (res) {
				console.log(res)
				this.hotcity = res.data.data.hotcity
				console.log(this.hotcity)
			},
			handleGetListErr () {
				console.log('请求返回失败')
			}
		},
		created (){
			this.getListInfo()
		}
	}
</script>
<style lang="stylus" scoped>
	.main
		display flex
		flex-direction column
		position:absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		.list
			flex 1
</style>