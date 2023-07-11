const originObj = {}

const observer = new Proxy(originObj, {
  /**
   * getter
   * @param {*} target target 是代理虚拟化的对象
   * @param {*} key 要获取的值对应的 key
   * @param {*} receiver receiver是 Proxy 或者继承 Proxy 的对象，即 observer
   * @returns
   */
  get(target, key, receiver) {
    console.log(`get ${String(key)}`, 'target', target, 'receiver', receiver)
    return target[key]
  },
  set(target, key, value, receiver) {
    console.log(`set ${String(key)}: ${value}`, 'target', target, 'receiver', receiver)
    target[key] = value
    return true
  },
  defineProperty(target, key, description) {
    console.log(`defineProperty ${String(key)} ${description}`, 'target', target)
    target[key] = description.value
    return true
  },
  deleteProperty(target, key) {
    console.log(`delete ${String(key)}`, 'target', target)
    return true
  }
})

Object.defineProperty(observer, 'a', { configurable: true, enumerable: true, value: 'aaa' })
observer.b = 'bbb'
observer.c = 'ccc'
console.log(observer, observer.a, observer.b, observer.c)
delete observer.a
observer.b = null
observer.c = void 0
console.log(observer, observer.a, observer.b, observer.c)
