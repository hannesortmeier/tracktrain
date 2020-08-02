<template>
  <div class="home">
    <App msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import axios from "axios";
import App from "@/components/App.vue";

export default {
  name: "Home",
  components: {
    App,
  },
};
</script>
