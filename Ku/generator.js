// Generator yield前后位置的作用Demo1

// function* func() {
//   let a = yield "a";
//   console.log(a)
// }
// let ge = func();
// ge.next()
// let d = ge.next(1);
// console.log(d);

// Generator yield前后位置的作用Demo2

// function fun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
// }
// function* promiseGe() {
//   let val = yield fun2();
//   console.log(val);
// }
// let ge = promiseGe();
// ge.next().value.then(res => ge.next(res));

// Generator的基本使用

// const ge = (function*() {
//   let a = yield ("aaa");
//   let b = yield "bbb";
//   console.log(a, b);
// })();

// function iterator(ge, val) {
//   if (!ge.next) return;
//   let { value, done } = ge.next(val);
//   return done || iterator(ge, value);
// }

// iterator(ge);

// Gnerator仿async/await

function iterator(gen, value) {
  if (!gen.next) return;
  let res = gen.next(value);
  value = res.value;
  return res.done || value.then(res => iterator(gen, res));
}

function await(promise) {
  return promise instanceof Promise ? promise : Promise.resolve(promise);
}

function async(func) {
    if()
  let str = func.toString();
  str = str.replace("function", "function*");
  str = str.replace(/\Wawait/g, " yield ");
  const gen = eval(`(${str})()`);
  iterator(gen);
}

async(function() {
  let a = await(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    })
  );
  console.log(a);
  let b = await(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    })
  );
  console.log(b);
});
