const { AsyncParallelBailHook } = require("../lib");

// 异步并行保释 Hook

/**
 * Bail 执行每个事件函数，遇到结果不为undefined则结束执行，直接走call的回调
 */
const hooks = new AsyncParallelBailHook(["params"]);

hooks.tapPromise("a", (params, callback) => {
  // tapPromise 通过 resolve 进行保释
  console.log('a tapPromise callback:', !callback ? 'not' : '', 'exist');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks 800 a tapPromise", params);
      resolve("a tapPromise 800");
      callback && callback('a tapPromise 800')
    }, 800);
  });
});

hooks.tapAsync("b", (params, callback) => {
  console.log('b tapAsync callback:', !callback ? 'not' : '', 'exist');
  setTimeout(() => {
    console.log("hooks 300 b tapAsync", params);
    // 进行保释，该操作会使回调在所以 tap 运行完成后执行
    callback && callback("b tapAsync 300");
  }, 300);
});

hooks.tapAsync("c", (params, callback) => {
  console.log('c tapAsync callback:', !callback ? 'not' : '', 'exist');
  setTimeout(() => {
    console.log("hooks 500 c tapAsync", params);
    callback && callback("c tapAsync 500")
  }, 500);
});

hooks.tap('d', (params, callback) => {
  // tap 同样不带有回调，因此无法使用promise进行保释
  console.log('d tap callback:', !callback ? 'not' : '', 'exist');
  console.log("hooks d tap", params);
  callback && callback("d tap sync")
})

hooks.tapPromise("e", (params, callback) => {
  // tapPromise 通过 resolve 进行保释
  console.log('e tapPromise callback:', !callback ? 'not' : '', 'exist');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks 1000 e tapPromise", params);
      resolve("e tapPromise 1000");
      callback && callback('e tapPromise 1000')
    }, 1000);
  });
});

hooks.tapPromise("f", (params, callback) => {
  // tapPromise 通过 resolve 进行保释
  console.log('f tapPromise callback:', !callback ? 'not' : '', 'exist');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks 600 f tapPromise", params);
      resolve("f tapPromise 600");
      callback && callback('f tapPromise 600')
    }, 600);
  });
});

hooks.tapAsync("j", (params, callback) => {
  console.log('g tapAsync callback:', !callback ? 'not' : '', 'exist');
  setTimeout(() => {
    console.log("hooks 900 g tapAsync", params);
    callback && callback("g tapAsync 900")
  }, 900);
});

hooks.callAsync("start", (...res) => {
  console.log("done", res);
});
