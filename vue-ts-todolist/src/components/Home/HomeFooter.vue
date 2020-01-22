<template>
  <div class="home-footer">
    <input type="text" v-model="eventName" placeholder="new event" />
    <button @click="addEvent(event)">addEvent</button>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Emit,
  Model,
  Watch
} from "vue-property-decorator";

@Component
export default class HomeFooter extends Vue {
  // data
  private eventName: string = "";

  //methods
  private tempEvent(name: string) {
    return () => {
      console.log(name);
    };
  }
  @Emit("addEvent")
  public addEvent(event: TodoEvent) {
    this.eventName = "";
  }

  // computed
  get event() {
    return {
      name: this.eventName,
      event: this.tempEvent(this.eventName),
      done: false
    };
  }

  // watch
  @Watch("eventName")
  cgName(nVal: string, oVal: string) {
    console.log(nVal);
  }

  mounted(): void {
    console.log("Ready");
  }
}
</script>

<style scoped lang="less">
@import "../../styles/gradient";

.home-footer {
  margin: 0 auto;
  width: 400px;
  height: 30px;
  line-height: 30px;
  input {
    vertical-align: middle;
    width: 300px;
    height: 20px;
    outline: none;
    border: none;
    text-indent: 5px;
    background: #cfcfcf;
  }
  button {
    vertical-align: middle;
    width: 100px;
    height: 20px;
    width: 100px;
    outline: none;
    border: none;
    background: #808080;
    color: #f0f0f0;
  }
}
</style>
