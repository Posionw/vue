<template>
	<div>
		<div>
			{{city}}
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
	import { mapState,mapMutations } from 'vuex'
	export default {
		data(){
			return{
			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			...mapMutations(['changeCity']),
			cityClick(e){
				const city = e.target.innerText
				// this.$store.commit("changeCity",e.target.innerHTML)
				this.changeCity(e.target.innerText)
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