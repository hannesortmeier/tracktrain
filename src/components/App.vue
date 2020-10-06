<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes.light.background}">
    <AppBar />
    <v-main>
      <v-container class="fluid">
        <div id="nav">
          <router-link to="/login">Login</router-link> |
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <v-row align="start" justify="center">
          <v-col cols="6">
            <Search />
            <template v-if="!$store.state.player_exists">
              <p>
                There seems to be no Spotify player. Are you sure you are
                listening to Spotify?
              </p>
              <v-btn block @click="refresh_player"> refresh </v-btn>
            </template>
            <p v-else>Queue:</p>
            <p v-for="(track, index) in $store.state.queue" :key="index">
              {{ index }} : {{ track.name }}
            </p>
            <SearchList />
          </v-col>
        </v-row>
      </v-container>
      <v-footer fluid fixed>
        <v-container fluid>
          <p>
            {{ $store.state.player.item.artists[0].name }} -
            {{ $store.state.player.item.name }}
          </p>
          <ProgressBar
            size="huge"
            :val="progression_percent"
            :text="progress_text"
            bar-color="#fdbe01"
          />
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import App from "@/components/App.vue";
import AppBar from "@/components/AppBar.vue";
import Search from "@/components/Search.vue";
import SearchList from "@/components/SearchList.vue";
import axios from "axios";
import ProgressBar from "vue-simple-progress";
import Cookies from "js-cookie";

export default {
  name: "Home",
  components: {
    App,
    AppBar,
    Search,
    SearchList,
    ProgressBar,
  },

  data: () => ({
    progress: null,
  }),

  methods: {
    get_player: function () {
      let token = Cookies.get("access_token");
      const headers = {
        Authorization: "Bearer " + token,
      };
      let res = axios({
        method: "get",
        url: "https://api.spotify.com/v1/me/player",
        headers: headers,
      })
        .then((response) => response.data)
        .catch((error) => console.log(error));
      return res;
    },

    refresh_player: function () {
      this.get_player().then((data) => {
        if (!data) {
          console.log("There is no player");
          this.$store.commit("player_exists", false);
        } else {
          console.log("data", data);
          this.$store.commit("refresh_player", data);
        }
      });
    },

    increment_progress: function () {
      let progression = (this.progress_sec / this.duration_sec) * 100;

      let intervallId = setInterval(() => {
        this.$store.commit("increment_progress");
        let progression = (this.progress_sec / this.duration_sec) * 100;
        this.$store.commit("set_progression", progression);

        if (this.progress_sec >= this.duration_sec) {
          this.refresh_player();

          if (this.$store.state.queue[0]) {
            let topQueueTrack = this.$store.state.queue[0].id;
            let runningTrack = this.$store.state.player.item.id;
            if (topQueueTrack == runningTrack) {
              this.$store.commit("remove_from_queue");
            }
          }
          clearInterval(intervallId);
          this.increment_progress();
        }
      }, 1000);
    },
  },

  computed: {
    progress_sec: function () {
      return Math.floor(this.$store.state.player.progress_ms / 1000);
    },

    duration_sec: function () {
      return Math.floor(this.$store.state.player.item.duration_ms / 1000);
    },

    progress_text: function () {
      return String(this.progress_sec) + " / " + String(this.duration_sec);
    },

    progression_percent: function () {
      return Math.floor(this.$store.state.progression);
    },
  },

  mounted() {},

  created() {
    this.increment_progress();
    this.refresh_player();
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  text-align: left;
}
</style>
