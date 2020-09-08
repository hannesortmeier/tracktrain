<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container class="fluid">
        <v-row align="start" justify="center">
          <v-col cols="6">
            <Search />
            <p>Progress: {{ progress_sec }}</p>
            <p>Duration: {{ duration_sec }}</p>
            <SearchList />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import App from "@/components/App.vue";
import AppBar from "@/components/AppBar.vue";
import Search from "@/components/Search.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "Home",
  components: {
    App,
    AppBar,
    Search,
    SearchList,
  },

  computed: {
    progress_sec: function () {
      return Math.floor(this.$store.state.player.progress_ms / 1000);
    },

    duration_sec: function () {
      return Math.floor(this.$store.state.player.item.duration_ms / 1000);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
