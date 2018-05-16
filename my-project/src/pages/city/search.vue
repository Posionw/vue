<template>
	<div class="search">
		<input type="text" class="search-input" placeholder="输入城市名或拼音" />
	</div>
</template>
<script>
	export default{
		name:'city-search'
	}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
	.search
		height:.74rem
		background: $bgColor
		padding: 0 .2rem
		.search-input
			height .62rem
			line-height .62rem
			width:100%
			padding: 0 .2rem
			border-radius .1rem
			text-align center
			font-size .24rem
			color $fontNormalColor
			box-sizing:border-box
</style>