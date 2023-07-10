const { AsyncSeriesHook } = require("../lib");

// 异步串行 Hook
const hooks = new AsyncSeriesHook(["params"]);

hooks.tap('0', (args) => {
  console.log('0', args)
})

hooks.tapPromise("a", (args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve('a');
    }, 1000);
  });
});

hooks.tapPromise("b", (args) => {
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
