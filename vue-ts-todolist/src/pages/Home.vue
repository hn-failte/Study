<template>
  <div class="home">
    <home-header />
    <home-body :eventStore="eventStore" />
    <home-footer @addEvent="fireEvent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import HomeComponents from "@/components/Home/index";

class TodoEvent {
  public name: string;
  public event: Function;
  public done: boolean;
  constructor(name: string, event: Function) {
    this.name = name;
    this.event = event;
    this.done = true;
  }
}

@Component({
  components: {
    ...HomeComponents
  }
})
export default class Home extends Vue {
  public eventStore: TodoEvent[] = [];
  public fireEvent(member: TodoEvent): void {
    this.eventStore.push(member);
  }

  @Watch("eventStore")
  cgES(nVal: TodoEvent[], oVal: TodoEvent[]) {
    console.log("eventStore changed:", nVal);
  }
}
</script>

<style scoped lang="less">
.home {
  margin: 0 auto;
  width: 400px;
}
</style>
