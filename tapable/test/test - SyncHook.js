const { SyncHook } = require("../lib");

const hooks = new SyncHook(["arg1", "arg2", "arg3"]);

hooks.tap("a", (...args) => {
  console.log(args, "a");
});

hooks.tap("b", (...args) => {
  console.log(args, "b");
});

// 同步监听
hooks.tap("c", (...args) => {
  console.log(args, "c");
});

// call的参数会传递给前面监听的事件
hooks.call("call", () => {
  // 同步方法没有回调，若需要回调，直接在外边写即可
  console.log("call");
});
