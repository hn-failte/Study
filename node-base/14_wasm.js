var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg)
    }
  },
  env: {
    abort: () => {}
  }
}

fetch('./14_c.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, importObject))
  .then(result => result.instance.exports)
  .then(module => console.log(module.add(1, 3)))
