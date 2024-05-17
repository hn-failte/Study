const util = require('util')

// 仅在NODE_DEBUG=util时触发该日志
// eg: NODE_DEBUG=util node 15_util.js
const debuglog = util.debuglog('UTIL')
debuglog('start', true)
if (debuglog.enabled) {
  console.log('log start')
}

// 定义console.log方法即将废弃
// eg: node --trace-deprecation 15_util.js
const deprecateConsoleLog = util.deprecate(console.log, 'will deprecate', 'code_console_log')
deprecateConsoleLog('deprecate')

// 打印到终端带颜色
console.log(util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 }))

// 获取系统错误的名称
require('fs').access('file/that/does/not/exist', err => {
  const name = util.getSystemErrorName(err.errno)
  console.error(name) // ENOENT
})
