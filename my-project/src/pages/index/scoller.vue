<template>
	<div ref="scroller">
		  <div class="content">
		  	<transition name="loading">
		  		<div v-show="isLoading" class="loading">正在加载</div>
		  	</transition>
		    <div class="item" v-for="item in list" :key="item.id" >
		    	<img class="item-img" v-lazy="item.ingUrl" alt="">
		    	<div class="item-content">
		    		<p class="item-title">{{item.title}}</p>
		    		<p class="item-desc">{{item.desc}}</p>
		    		<p class="item-price">
		    			<span class="price-tag">&yen;</span>
		    			{{item.price}}
		    			<span class="price-start">起</span>
		    		</p>
		    	</div>
		    </div>
		  </div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {mapState} from 'vuex'
	import axios from 'axios'
	export default{
		name:'index-scroller',
		props:{
			sights: Array
		},
		data(){
			return{
				isLoading:false
			}
		},
		watch:{
			list(){
				this.$nextTick(()=>{
					this.scroller.refresh()
				})
			}
		},
		computed:{
			list(){
				return this.sights
			},
			...mapState(['city'])
		},
		methods:{
			createScroller(){
				this.scroller = new BScroll(this.$refs.scroller,{
					probeType:3
				})
			},
			bindEvents(){
				// console.log('events')
				this.scroller.on('scroll',this.handleScroll.bind(this))
				this.scroller.on('scrollEnd',this.handleScrollEnd.bind(this))
			},
			handleScroll(e){
				if(e.y>60 && !this.isLoading){
					console.log('下拉刷新')
					this.isLoading = true
					this.getListInfo()
				}
			},
			handleScrollEnd(e){
				this.isLoading = false
			},
			getListInfo (){
				axios.get('/api/sightList.json?city='+this.city)
					.then(this.handleGetDataSucc.bind(this))
  		  			.catch(this.handleGetDataErr.bind(this))
			},
			handleGetDataSucc (res) {
				console.log(res)
			},
			handleGetDataErr(e){
				this.isLoading = false
			},

		},
		mounted(){
			this.createScroller()
			this.bindEvents()
		}
	}
</script>
<style scoped lang="stylus">
	@import "../../assets/stylus/varibles.styl"
	.loading
		line-height:.8rem
		text-align:center
		position:absolute
		top:-.8rem
		left:0
		width:100%
	.loading-enter-active, .loading-leave-active{
		 transition: opacity .2s
	}
	.loading-enter, .loading-leave-to{
	    opacity: 0
	}
	.item
		display:flex
		padding: .24rem
		.item-img
			width 1.4rem
			height 1.4rem
			margin-right .2rem
		.item-content
			flex 1
			// background pink
			.item-title
				margin .04rem 0 .2rem 0
				font-size .3rem
				color $fontColor
				width 100%
				line-height .3rem
			.item-desc
				width 100%
				margin-bottom .2rem
				font-size .28rem
				color $lightFontColor
				line-height .28rem
			.item-price
				font-size .36rem
				color $enlightFontColor
				line-height .36rem
				.price-tag
					font-size .24rem
				.price-start
					font-size .24rem
					color $lightFontColor
</style>













