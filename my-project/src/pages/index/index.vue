<template>
	<div class="main">
  		<index-header></index-header>
  		<index-swiper :list="swiperInfo"></index-swiper>
  		<index-icons :list="iconsInfo"></index-icons>
      <index-scroller :list="sightsInfo" class="scoller"></index-scroller>
    </div>
</template>

<script>
import IndexHeader from './header.vue'
import IndexSwiper from './swiper.vue'
import IndexIcons from './icons.vue'
import IndexScroller from './scoller.vue'
import axios from 'axios'
export default {
  name: 'index',
  components:{
  	IndexHeader,
  	IndexSwiper,
  	IndexIcons,
    IndexScroller
  },
  data(){
  	return{
  		swiperInfo:[],
  		iconsInfo:[],
      sightsInfo:[]
  	}
  },
  methods:{
  	getIndexData(){
  		axios.get('/api/index.json')
  		  .then(this.handleGetDataSucc.bind(this))
  		  .catch(this.handleGetDataErr.bind(this))
  	},
  	handleGetDataSucc(res){
  		const data = res.data.data
  		this.swiperInfo = data.swiperList
  		this.iconsInfo = data.iconList
      this.sightsInfo = data.sightsList
  		console.log(data)
  	},
  	handleGetDataErr(){
  		console.log('error')
  	}
  },
  created (){
  	this.getIndexData();
  }
}
</script>
<<<<<<< HEAD
<style>
</style>
=======
<style lang="stylus" scoped>
  .main
    display flex
    flex-direction column
    position absolute
    left 0
    bottom 0
    top 0
    right 0
    .scoller
      flex 1
      overflow hidden
</style>






















>>>>>>> origin/2018-0428-index-blaze
