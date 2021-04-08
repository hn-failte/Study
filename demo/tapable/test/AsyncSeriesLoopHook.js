const { AsyncSeriesLoopHook } = require("../lib");

// 异步串行循环 Hook
// 该 Hook 是异步串行 Hook 与 同步循环 Hook 的结合
const hooks = new AsyncSeriesLoopHook(["params"]);

let count = 0;

hooks.tapPromise("a", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve(count > 2 ? void 0 : count++);
    }, 500);
  });
});

hooks.tapPromise("b", () => {
  // 先执行完 a 后，才会执行 b
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks b");
      resolve(count > 3 ? void 0 : count++);
    }, 500);
  });
});

hooks.callAsync("start", () => {
  console.log("done");
});
