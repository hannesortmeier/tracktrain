<template>
  <v-text-field
    v-model="search_key"
    label="Search for song..."
    append-icon="mdi-magnify"
    color="green"
    outlined
    shaped
    @change="spotify_search()"
  ></v-text-field>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data: () => ({
    search_key: null,
  }),
  methods: {
    spotify_search: function () {
      console.log();
      const headers = {
        Authorization: "Bearer " + this.$store.state.access_token,
      };
      axios({
        method: "get",
        url:
          "https://api.spotify.com/v1/search?q=" +
          encodeURIComponent(this.search_key) +
          "&type=track",
        headers: headers,
      })
        .then((response) =>
          this.$store.commit("set_search_response", response.data)
        )
        .catch((error) => console.log(error));
    },
  },
};
</script>