<template>
	<div>
		<div>
			{{$store.state.city}}
		</div>
		<div class="cheng" @click="cityClick">
			南京
		</div>
		<div class="cheng" @click="cityClick">
			长春
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
			}
		},
		methods:{
			cityClick(e){
				const city = e.target.innerHTML
				this.$store.commit("changeCity",e.target.innerHTML)
				this.$router.go(-1)
			}
		},
		mounted(){
			console.log(this.$route.params.id)
		}
	}
</script>
<style lang="stylus" scoped>
	.cheng
		height 100px
		width 100px
		background red
</style>