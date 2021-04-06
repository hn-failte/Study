const { SyncWaterfallHook } = require("../lib");

const hooks = new SyncWaterfallHook(["arg1", "arg2", "arg3"]);

hooks.tap("a", (a, b, c) => {
  const result = a + b + c;
  console.log(result);
  return result;
});

hooks.tap("b", (arg, ...args) => {
  // 后一个钩子的参数是前一个钩子的返回值，参数会替换最初传入的参数
  const result = arg + 10;
  console.log(result);
  console.log(args, 'args');
  return result;
});

hooks.tap("c", (arg, ...args) => {
  const result = arg + 10;
  console.log(result);
  console.log(args, 'args');
  return result;
});

hooks.call(1, 2, 3);
