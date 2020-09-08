<template>
  <ul v-if="this.$store.state.search_response" id="search">
    <li v-for="track in this.tracks" :key="track.id" :title="track.title">
      <v-btn text width="480" height="80" @click="queueing_card(track)">
        <div class="button_div">
          <img :src="track.imageURL" />
          <p>{{ track.title }}</p>
        </div>
      </v-btn>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchList",
  data: () => ({}),
  computed: {
    tracks: function () {
      let tracks = [];
      this.$store.state.search_response.tracks.items.forEach((item) =>
        tracks.push({
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          title: item.artists[0].name + " - " + item.name,
          imageURL: item.album.images[2].url,
          uri: item.uri,
        })
      );
      return tracks;
    },
  },
  methods: {
    add_to_queue: function (track) {
      const headers = {
        Authorization: "Bearer " + this.$store.state.access_token,
      };
      let res = axios({
        method: "post",
        url: "https://api.spotify.com/v1/me/player/queue?uri=" + track.uri,
        headers: headers,
      })
        .then((response) => console.log(response.status))
        .catch((error) => console.log(error));
    },

    get_player: function () {
      const headers = {
        Authorization: "Bearer " + this.$store.state.access_token,
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

    queueing_card: async function (track) {
      let message = "Do you want to add the track to the queue?";
      this.$confirm(message, track.title).then(() => {
        this.add_to_queue(track);
        this.get_player().then((data) => {
          console.log("data", data);
          this.$store.commit("refresh_player", data);
        });
      });
    },
  },
};
</script>

<style scoped>
.button_div {
  width: 480px;
  height: 80px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-content: center;
}
li {
  margin-top: 5px;
  width: 480px;
  height: 80px;
}
ul {
  text-align: center;
  padding-left: 44.25px;
}
p {
  height: 64;
  padding-left: 10px;
  margin: 0px;
  text-align: center;
}
</style>