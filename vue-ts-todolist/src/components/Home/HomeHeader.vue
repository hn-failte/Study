<template>
  <div class="home-header">TodoList for Typescript</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

class MyObj {
  public key: string;
  constructor(key: string) {
    this.key = key;
  }
}

@Component
export default class HomeHeader extends Vue {}
</script>

<style scoped lang="less">
@import "../../styles/gradient";
.home-header {
  margin: 0 auto;
  font-size: 28px;
  font-weight: bold;
  width: 400px;
  height: 60px;
  line-height: 60px;
  .gra_bg(to top, #a1f2a1, #6e1e6f);
  .gra_text;
}
</style>
