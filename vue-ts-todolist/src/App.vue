<template>
  <div id="app">
    <home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/pages/Home.vue";

@Component({
  components: {
    [Home.name]: Home
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 18px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
