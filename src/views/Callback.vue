<template>
  <p>You will be redirected shortly</p>
</template>

<script>
export default {
  mounted: function () {
    let token = window.location.href.split("#")[1].split("&")[0].split("=")[1];
    this.$store.commit("set_access_token", token);
    this.$router.push("home");
  },
};
</script>

<style>
</style>