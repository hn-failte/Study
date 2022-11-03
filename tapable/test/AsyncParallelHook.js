const { AsyncParallelHook } = require("../lib");

// 异步并行 Hook
// 该 Hook 的流程类似与 Promise.all
// 该 Hook 的所有钩子中，钩子回调的第一个参数均为事务的 key
// 该 Hook 的 tapAsync 钩子中，钩子回调的第二个参数为事务回调的参数，该函数只会执行一遍，且其在一个函数中执行后，不会管是否有其他钩子未执行完
const hooks = new AsyncParallelHook(["params"]);

hooks.tapPromise("a", (tapKey, ...rest) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a", tapKey);
      resolve('a 1000');
    }, 1000);
  });
});

hooks.tapPromise("b", (tapKey) => {
  // a、b 同步执行，b 会先完成
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks b", tapKey);
      resolve('b 500');
    }, 500);
  });
});

// 后执行回调的没有触发回调
hooks.tapAsync("d", (tapKey, callback) => {
  setTimeout(() => {
    console.log("hooks d", tapKey);
    callback('d 2000')
  }, 2000);
});

// 先执行回调的没有触发回调
hooks.tapAsync("e", (tapKey, callback) => {
  setTimeout(() => {
    console.log("hooks e", tapKey);
    callback('e 1500')
  }, 1500);
});

hooks.tap('c', (tapKey, callback) => {
  console.log(callback)
  console.log('c', tapKey)
})

hooks.callAsync("start", (...res) => {
  console.log("done", res);
});
