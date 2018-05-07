<template>
  <div class="header">
  	<div class="back iconfont">&#xe624;</div>
  	<div class="search">
  		<span class="iconfont search-icon">&#xe632;</span>
  		请输入搜索内容
  	</div>
  	<div class="city">
  		<router-link to="/Daytrip/123">
  			{{city}}
  		</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'index-header',
  props:['city']
}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.header
		display: flex
		height: 0.88rem
		line-height: .88rem
		background: $bgColor
		color:#fff
		.back
			width: .58rem
			text-align: center
			color: #fff
			font-size: .4rem
			font-weight bold
		.search
			flex: 1
			height: .6rem
			line-height: .6rem
			background: #fff;
			margin: .14rem .2rem
			border-radius .1rem
			color: #919191
			padding-left: .4rem
			.search-icon
				position: relative
				top: .02rem
				padding-right: .4rem
		.city
			padding-right: 0.6rem
			position relative
			&:before
				position absolute
				top .34rem
				right .2rem
				content:"\0020"
				width: 0
				height: 0
				border-left: .14rem solid transparent;
				border-right: .14rem solid transparent;
				border-top: .14rem solid #fff;
</style>
























