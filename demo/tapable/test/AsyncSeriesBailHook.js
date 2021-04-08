const { AsyncSeriesBailHook } = require("../lib");

// 异步串行保释 Hook
const hooks = new AsyncSeriesBailHook(["params"]);

hooks.tapPromise("a", (params) => {
  // tapPromise 没有回调，但可以把resolve的值当做返回值
  // promise 最后的值为非 undefined 时会执行最后的回调
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a", params);
      // 若未进行 resolve 或 reject 操作，则后续的 tap 将无法正常执行
      resolve();
    }, 800);
  }).then((res) => res);
});

hooks.tapAsync("b", (params, callback) => {
  setTimeout(() => {
    console.log("hooks b", params);
    // 进行保释，该操作会使回调在所以 tap 运行完成后执行
    // 若未执行回调，则后续的 tap 将无法正常执行
    callback();
  }, 300);
});

hooks.tapAsync("c", (params, callback) => {
  setTimeout(() => {
    console.log("hooks c", params);
    callback();
  }, 500);
});

hooks.tap("d", (params) => {
  // tap 同样不带有回调，因此无法使用promise进行保释
  console.log("hooks d", params);
});

hooks.callAsync("start", () => {
  // 若所有的 tap 均已执行完，则正常执行回调
  console.log("done");
});
