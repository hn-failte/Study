// Generator yield前后位置的作用Demo1

function* func() {
  let a = yield "a";
  console.log(a);
}
let ge = func();
ge.next();
let d = ge.next(1);
console.log(d);

// Generator yield前后位置的作用Demo2

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
}
function* promiseGe() {
  let val = yield fun2();
  console.log(val);
}
let ge = promiseGe();
ge.next().value.then((res) => ge.next(res));

// Generator的基本使用

const ge = (function* () {
  let a = yield "aaa";
  let b = yield "bbb";
  console.log(a, b);
})();

function iterator(ge, val) {
  if (!ge.next) return;
  let { value, done } = ge.next(val);
  return done || iterator(ge, value);
}

iterator(ge);
