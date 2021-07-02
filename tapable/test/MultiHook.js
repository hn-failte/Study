const { MultiHook, SyncHook, SyncBailHook } = require("../lib");

const sync = new SyncHook(["arg"]);
const syncBail = new SyncBailHook(["arg"]);

// 将需要批量操作的 hook 放入该类中可以实现批量 tap
const hooks = new MultiHook([sync, syncBail]);

// 在进行 tap 时，会批量的进行 注册
hooks.tap("a", (arg) => {
  console.log("a", arg);
  // SyncBailHook 在返回非 undefined 后，下一个 tap 将不会执行
  return true;
});

hooks.tap("b", (arg) => {
  console.log("b", arg);
});

sync.call("start");

syncBail.call("start");
