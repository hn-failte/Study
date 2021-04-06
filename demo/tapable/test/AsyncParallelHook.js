const { AsyncParallelHook } = require("../lib");

// 异步并行 Hook
const hooks = new AsyncParallelHook(["params"]);

hooks.tapPromise("a", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve();
    }, 1000);
  });
});

hooks.tapPromise("b", () => {
  // a、b 同步执行，b 会先完成
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks b");
      resolve();
    }, 500);
  });
});

hooks.callAsync("start", () => {
  console.log("done");
});
