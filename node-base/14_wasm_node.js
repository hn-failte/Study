const fs = require('fs')
const wasmBuffer = fs.readFileSync('./14_c.wasm')
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const c = wasmModule.instance.exports
  console.log(c.add(1, 3))
  console.log(c.zhengchu(9, 2))
  console.log(c.chu(9, 2))
})
