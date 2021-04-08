const { SyncLoopHook } = require("../lib");

// 同步循环 Hook
const hooks = new SyncLoopHook(["arg"]);

let count = 0;

hooks.tap("a", (arg) => {
  console.log("a", arg, count);
  // 在返回 undefined 后，该 tap 不会再自己执行（可以被后续的 tap 触发被动执行）
  return void 0;
});

hooks.tap("b", (arg) => {
  // b 是一个可以循环的 tap
  // 在 b 之前的 tap 每次在 b 执行时，都会再次执行
  console.log("b", arg, count);
  return count > 10 ? void 0 : count++;
});

hooks.tap("c", (arg) => {
  // 在 b 执行完成之前，c 都不会执行
  console.log("c", arg, count);
  return count > 10 ? void 0 : count++;
});

hooks.call("loop");
