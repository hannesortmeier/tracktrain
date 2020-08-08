<template>
  <v-app-bar app height="80" justify="space-between">
    <div class="spacing"></div>
    <v-toolbar-title class="px-50 align-center">
      <span class="title">TrackTrain</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row align="center" justify="end" class="px-4">
      <v-switch v-model="$vuetify.theme.dark" label="Dark mode" class="mx-4">
      </v-switch>
    </v-row>
    <div class="spacing"></div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

><style scoped>
.spacing {
  display: inline-block;
  width: 60px;
}
</style>