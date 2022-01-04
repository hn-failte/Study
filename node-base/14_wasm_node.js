// node --experimental-wasm-modules 14_wasm_node.js
import('./14_c.wasm').then(c => {
  console.log(c.add(1, 3))
  console.log(c.zhengchu(9, 2))
  console.log(c.chu(9, 2))
})
