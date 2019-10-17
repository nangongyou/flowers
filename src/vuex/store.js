import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:1
	},
	mutations:{
	    mutationsAddCount(state,n=0){
	      state.count += n;
	    },
	    mutationsReduceCount(state,n=0){
	      state.count -= n;
	    }
	},
	getters:{
		gettersCount(state){
			return state.count * 599
		}
	}

})