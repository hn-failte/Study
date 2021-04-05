const { AsyncSeriesHook } = require("../lib");

// 串行的异步 Hook
const hooks = new AsyncSeriesHook(["params"]);

hooks.tapPromise("a", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve();
    }, 1000);
  });
});

hooks.tapPromise("b", () => {
  // 先执行完 a 后，才会执行 b
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
