<template>
  <v-app id="inspire">
    <v-navigation-drawer floating permanent app> </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Quetify</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-row align="center" justify="end" class="px-4">
        <v-switch v-model="$vuetify.theme.dark" label="Dark mode" class="mx-4">
        </v-switch>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="song"
              label="Search for song..."
              append-icon="mdi-magnify"
              color="white"
              outlined
              shaped
              @change="spotify_search()"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import App from "@/components/App.vue";

export default {
  name: "Home",
  components: {
    App,
  },
  methods: {
    set_acces_token: function () {
      this.access_token = window.location.href
        .split("#")[1]
        .split("&")[0]
        .split("=")[1];
    },
    spotify_search: function () {
      const headers = { Authorization: "Bearer " + this.access_token };
      axios({
        method: "get",
        url: "https://api.spotify.com/v1/search?q=beginner&type=track",
        headers: headers,
      })
        .then((response) => (this.search = response))
        .catch((error) => console.log(error));
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
