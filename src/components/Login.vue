<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-20">
          <v-toolbar dark flat>
            <v-toolbar-title>Login to Spotify</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="redirect()" large>Login</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    song: null,
    search: null,
    access_token: null,
  }),

  methods: {
    redirect: function () {
      const uri = "https://accounts.spotify.com/authorize?";
      let client_id = "client_id=03ae5d1e3fda46ef9a69d085019de2ed&";
      let response_type = "response_type=token&";
      let redirect_uri =
        "redirect_uri=" +
        encodeURIComponent("http://localhost:8080/callback") +
        "&";
      let code_challenge_method = "code_challenge_method=S256&";
      let scope =
        "scope=user-modify-playback-state,user-read-currently-playing,user-read-recently-played,user-read-playback-state&";
      let state = "state=application-state";
      window.location.href =
        uri + client_id + response_type + redirect_uri + scope;
    },
  },
};
</script>