<template>
  <ul v-if="this.$store.state.search_response" id="search">
    <li v-for="track in this.tracks" :key="track.id" :title="track.title">
      <v-btn text height="70">
        <img :src="track.imageURL" /> {{ track.title }}
      </v-btn>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SearchList",
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
        })
      );
      return tracks;
    },
  },
};
</script>

<style scoped>
</style>