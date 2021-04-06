const { SyncBailHook } = require('tapable')

const hooks = new SyncBailHook(['params'])

hooks.tap('a', () => {
    console.log('hooks a')
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

hooks.call('start', () => {
    console.log('done')
})
