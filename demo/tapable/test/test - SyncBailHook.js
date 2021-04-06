const { SyncBailHook } = require('../lib')

const hooks = new SyncBailHook(['params'])

hooks.tap('a', (params) => {
    console.log('hooks a', params)
    return void 0
})
hooks.tap('b', () => {
    console.log('hooks b')
    return true
})
hooks.tap('c', () => {
    // 前一个 tap 的返回值不为 undefined 时，不会再执行后续的 tap
    console.log('hooks c')
})

hooks.call('start')
