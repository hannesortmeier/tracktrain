<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container class="fluid">
        <v-row align="start" justify="center">
          <v-col cols="6">
            <Search />
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
  data: () => ({}),
  methods: {},
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
