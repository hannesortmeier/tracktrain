import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from "js-cookie";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged_in: false,
    access_token: null,
    search_response: null,
    player: {
      progress_ms: 0,
      item: {
        duration_ms: 1000,
        id: 0,
        artists: [{
          name: ""
        }]
      }
    },
    progression: 0,
    queue: [],
    player_exists: false
  },
  mutations: {
    set_access_token(state, access_token) {
      var in60Minutes = 1 / 24;
      state.access_token = access_token
      Cookies.set("logged_in", true, {
        expires: in60Minutes
      });
      Cookies.set("access_token", access_token, {
        expires: in60Minutes
      });
    },
    set_search_response(state, search_response) {
      state.search_response = search_response
    },
    clicked(state) {
      state.clicked = !state.clicked
    },
    refresh_player(state, newPlayer) {
      state.player = newPlayer
      state.player_exists = true
    },
    increment_progress(state) {
      state.player.progress_ms = state.player.progress_ms + 1000
    },
    add_to_queue(state, track) {
      state.queue.push(track)
    },
    remove_from_queue(state) {
      state.queue.shift()
    },
    set_progression(state, progression) {
      state.progression = progression
    },
    player_exists(state, bool) {
      state.player_exists = bool
    },
    logged_in(state, bool) {
      state.logged_in = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
