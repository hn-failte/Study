const { HookMap, SyncHook, SyncWaterfallHook } = require("../lib");

// HookMap 的传参是一个函数，函数需要返回一个 Hook 实例
// HookMap 可以包含不同的 Hook
const hooks = new HookMap((key) => {
  if (key === "one") return new SyncHook(["arg"]);
  else return new SyncWaterfallHook(["arg"]);
});

{
  // 通过 for 方法可以创建一个对应该 key 的 hook
  hooks.for("one").tap("a", (arg) => {
    console.log("a", arg);
  });

  // 通过 get 方法可以取出一个对应该 key 的 hook
  hooks.get("one").call("one");
}

{
  const two = hooks.for("two");

  two.tap("a", (arg) => {
    console.log("a", arg);
    return "a";
  });

  two.tap("b", (arg) => {
    console.log("b", arg);
  });

  two.call("two");
}

{
  // 挟持器，可以在创建 Hook 的时候挟持到 key 和 hook
  hooks.intercept({
    factory(key, hook) {
      // key 是传入时的 key，hook 是未加挟持时即将生成的 hook 实例
      return new SyncHook();
    },
  });

  let three = hooks.for("three");

  three = hooks.get("three");

  three.tap("a", (arg) => {
    console.log("a", arg);
    return "a";
  });

  three.tap("b", (arg) => {
    console.log("b", arg);
  });

  three.call("three");
}
