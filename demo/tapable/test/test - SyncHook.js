const { SyncHook } = require("../lib");

// 实例话一个Hooks类进行使用，传递的字符串参数会作为执行函数的参数
const hooks = new SyncHook(["arg1", "arg2", "arg3"]);

// 同步监听
hooks.tap("a", (...args) => {
  // 该处的args包括了arg1、agr2、arg3
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
// 同步方法没有回调，若需要回调，直接在外边写即可
hooks.call(1, 2, 3);
