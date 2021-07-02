const { SyncBailHook } = require('../lib')

// 同步保释 Hook
const hooks = new SyncBailHook(['params'])

hooks.tap('a', (params) => {
    console.log('hooks a', params)
    return void 0
})

hooks.tap('b', (params) => {
    console.log('hooks b', params)
    return true
})

hooks.tap('c', (params) => {
    // 前一个 tap 的返回值不为 undefined 时，不会再执行后续的 tap
    console.log('hooks c', params)
})

hooks.call('start')
