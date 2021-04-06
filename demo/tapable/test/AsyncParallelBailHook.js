const { AsyncParallelBailHook } = require("../lib");

// 异步并行保释 Hook
const hooks = new AsyncParallelBailHook(["params"]);

hooks.tapPromise("a", (params, callback) => {
  // tapPromise 不带有回调，因此无法使用promise进行保释
  console.log(callback, 'callback');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a", params);
      resolve(void 0);
    }, 800);
  });
});

hooks.tapAsync("b", (params, callback) => {
  setTimeout(() => {
    console.log("hooks b", params);
    // 进行保释，该操作会使回调在所以 tap 运行完成后执行
    callback(true);
  }, 300);
});

hooks.tapAsync("c", (params, callback) => {
  setTimeout(() => {
    console.log("hooks c", params);
  }, 500);
});

hooks.tap('d', (params, callback) => {
  // tap 同样不带有回调，因此无法使用promise进行保释
  console.log(callback, 'callback');
  console.log("hooks d", params);
})

hooks.callAsync("start", () => {
  console.log("done");
});
