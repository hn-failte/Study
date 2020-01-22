<template>
  <div class="home-body">
    <div class="event-container">
      <header>EventStore</header>
      <ul>
        <li
          v-for="item in eventStore"
          :key="item.name"
          @click="handleEvent(item)"
          :class="{ done: item.done }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HomeBody extends Vue {
  @Prop({
    type: Array,
    default: []
  })
  private eventStore!: TodoEvent[];
  public handleEvent(item: TodoEvent): void {
    if (item.done) return;
    item.event();
    item.done = true;
  }
}
</script>

<style scoped lang="less">
@import "../../styles/gradient";
.home-body {
  margin: 0 auto;
  width: 400px;
  .event-container {
    width: 400px;
    height: 400px;
    header {
      height: 40px;
      line-height: 40px;
      font-weight: bold;
      .gra_bg(45deg, #c0c0c0, #0c0c0c);
      .gra_text;
    }
    ul {
      height: 360px;
      overflow-y: scroll;
      li {
        height: 30px;
        line-height: 30px;
        font-weight: bold;
        color: #666;
        &.done {
          color: #aaa;
          text-decoration: line-through;
          user-select: none;
        }
      }
    }
  }
}
</style>
