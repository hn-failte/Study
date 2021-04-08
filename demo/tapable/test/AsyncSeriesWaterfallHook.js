const { AsyncSeriesWaterfallHook } = require("../lib");

// 异步串行流水线 Hook
const hooks = new AsyncSeriesWaterfallHook(["params"]);

hooks.tapPromise("a", (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a", params);
      resolve("a");
    }, 800);
  }).then((res) => res);
});

hooks.tapAsync("b", (params, callback) => {
  setTimeout(() => {
    console.log("hooks b", params);
    // 当返回值为 undefined 时，后续的 tap 将会执行，且可携带参数到下一个函数中
    // 若未携带参数，则默认为上一 tap 传递的参数
    callback(void 0, "b");
  }, 300);
});

hooks.tapAsync("c", (params, callback) => {
  setTimeout(() => {
    console.log("hooks c", params);
    // 当返回值不为 undefined 时，后续的 tap 将不会执行
    callback(true, "c");
  }, 500);
});

hooks.tap("d", (params) => {
  console.log("hooks d", params);
});

hooks.callAsync("start", () => {
  // 若所有可执行的 tap 均已执行完，则正常执行回调
  console.log("done");
});
