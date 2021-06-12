<template>
  <div id="app">
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@import "assets/css/base.css";
</style>
