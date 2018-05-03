<template>
	<div ref="scroller">
		  <div class="content">
		    <div class="item" v-for="item in list" :key="item.id" >
		    	<img class="item-img" :src="item.ingUrl" alt="">
		    	<div class="item-content">
		    		<p>{{item.title}}</p>
		    		<p>{{item.desc}}</p>
		    		<p>{{item.price}}</p>
		    	</div>
		    </div>
		  </div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		name:'index-scroller',
		props:{
			list: Array
		},
		watch:{
			sights(){
				this.$nextTick(()=>{
					this.scroller.refresh()
				})
			}
		},
		mounted(){
			this.scroller = new BScroll(this.$refs.scroller)
		}
	}
</script>
<style lang="stylus" scoped>
	.item
		display:flex
		padding: .24rem
		.item-img
			width 1.4rem
			height 1.4rem
			margin-right .2rem
</style>













