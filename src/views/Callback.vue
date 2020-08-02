<template>
  <p>You will be redirected shortly</p>
</template>

<script>
export default {
  methods: {
    set_acces_token: function () {
      this.access_token = window.location.href
        .split("#")[1]
        .split("&")[0]
        .split("=")[1];
    },
  },
};
</script>

<style>
</style>