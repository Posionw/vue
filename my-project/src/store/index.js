import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state:state,
  state,
  // state: {
  // 	city: localStorage.city || ''
  // },
  mutations,
  // mutations:{
  // 	changeCity(state,city){
  // 		localStorage.city = city
  // 		state.city = city
  // 		console.log(city)
  // 	}
  // },
  actions
  // actions:{
  // 	changeCityDelayFiveSeconds(context,city){
  // 		setTimeout(() => {
  // 		  context.commit("changeCity",city)
  // 		}, 5000)
  // 	}
  // }
})

export default store