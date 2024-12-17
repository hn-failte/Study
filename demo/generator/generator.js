// Generator yield 前后位置的作用
function* func() {
  const ge_params1 = yield "a";
  console.log('ge ge_params1', ge_params1);
}

const ge = func();

const ge_result1 = ge.next();
console.log('ge ge_result1', ge_result1);

const ge_result2 = ge.next(1);
console.log('ge ge_result2', ge_result2);
