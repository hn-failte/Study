class EventBus {
  name = "";
  map = null;
  constructor(name) {
    this.map = new Map();
    this.name = name;
  }
  on(key, event) {
    this.map.set(key, event);
    return this;
  }
  off(key) {
    if (this.map.get(key)) this.map.delete(key);
    return this;
  }
  emit(key, payload) {
    const event = this.map.get(key);
    event && event(payload);
    return this;
  }
  async emitAsync(key, payload) {
    const event = this.map.get(key);
    event && (await event(payload));
    return this;
  }
  size() {
    return this.map.size;
  }
  clear() {
    this.map = new Map();
    return this;
  }
}

{
  const bus = new EventBus();

  bus
    .on("a", () => {
      console.log("a");
    })
    .on("b", () => {
      console.log("b");
    })
    .emit("a")
    .emit("b");
}

class EventStack {
  name = "";
  stack = null;
  constructor(name) {
    this.stack = new Array();
    this.name = name;
  }
  empty() {
    return this.stack.length === 0;
  }
  push(event) {
    this.stack.unshift(event);
    return this;
  }
  pop() {
    return this.stack.shift();
  }
  peek() {
    return this.stack[0];
  }
  emitOne() {
    this.pop() && this.pop()();
    return this;
  }
  async emitOneAsync() {
    this.pop() && (await this.pop()());
    return this;
  }
  emitAll(payload, callback) {
    while (this.stack.length) {
      this.stack.pop()(payload);
    }
    callback && callback();
  }
  async emitAll(payload, callback) {
    while (this.stack.length) {
      await this.stack.pop()(payload);
    }
    callback && callback();
  }
  clear() {
    this.stack.length = 0;
    return this;
  }
}

{
  const bus = new EventStack();

  bus
    .push((payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("a", payload);
          resolve();
        }, 500);
      });
    })
    .push((payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("b", payload);
          resolve();
        }, 500);
      });
    })
    .push((payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("c", payload);
          resolve();
        }, 500);
      });
    })
    .emitAll("emitAll");
}
