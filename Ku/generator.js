// const ge = (function*() {
//   let a = yield "aaa";
//   let b = yield "bbb";
//   console.log(a, b);
// })();

// function iterator(ge, val) {
//   if (!ge.next) return;
//   let { value, done } = ge.next(val);
//   return done || iterator(ge, value);
// }

// iterator(ge);

const states = [];
function await(promise) {
  if (!promise instanceof Promise) return Promise.resolve();
  const prev = states[states.length - 1];
  states.push(ge.next(val));
  console.log(states);
  return prev.value;
}

function async(func) {
  console.log(func.toString());
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

//

// function await(promise) {}

// function fun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
// }
// async function asyncFun() {
//   let awaitVal = await fun2();
//   console.log(awaitVal);
//   return awaitVal;
// }

// function doGe(ge, cb) {
//   if (!ge.next) return;
//   let { value, done } = ge.next();
//   cb(value);
//   return done || doGe(ge, cb);
// }

//

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

//

// function* func() {
//   let a = yield "a";
//   console.log(a)
// }
// let ge = func();
// ge.next()
// let d = ge.next(1);
// console.log(d);
