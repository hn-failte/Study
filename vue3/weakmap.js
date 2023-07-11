let a = { name: "aaa" };
let array = [ a ];
a = null; // 覆盖引用
console.log(array)

let b = { name: "bbb" };
const weakMap = new WeakMap([[b, [b]]])
console.log(weakMap.has(b))
b = null; // 覆盖引用
console.log(weakMap.has(b))
