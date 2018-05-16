<template>
	<div>list</div>
</template>
<script>
	export default{
		name:'city-list',
		props:{
			hotcity:Array
		},
		watch:{
			hotcity () {
				console.log(this.hotcity)
			}
		},
		mounted(){
			console.log(this.hotcity)
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>