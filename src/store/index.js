import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: null,
    search_response: null,
    player: {
      progress_ms: 0,
      item: {
        duration_ms: 0
      }
    },
  },
  mutations: {
    set_access_token(state, access_token) {
      state.access_token = access_token
    },
    set_search_response(state, search_response) {
      state.search_response = search_response
    },
    clicked(state) {
      state.clicked = !state.clicked
    },
    refresh_player(state, newPlayer) {
      state.player = newPlayer
    }
  },
  actions: {
  },
  modules: {
  }
})
