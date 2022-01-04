const events = require('events')

const emitter = new events.EventEmitter()

const each = arg => {
  console.log('each', arg)
}

emitter.once('once', () => {
  console.log('once')
})
emitter.on('each', each)
// emitter.addListener('each', each) // 等效于on
console.log(emitter.eventNames()) // 当前所有已注册事件的名称
console.log(emitter.listenerCount('each')) // 当前所有已注册事件数
console.log(emitter.listeners('each')) // 当前所有已注册事件
console.log(emitter.getMaxListeners()) // 当前可注册的最大事件数
emitter.setMaxListeners(20) // 修改最大事件数
console.log(emitter.getMaxListeners()) // 当前可注册的最大事件数

emitter.emit('once')
emitter.emit('each')

emitter.emit('once') // once only emit once
emitter.emit('each')

emitter.off('each', each) // each will expired
// emitter.removeListeners('each', each) // 等效于off

emitter.emit('each')

emitter.on('each1', each)
emitter.on('each2', () => each(1))
emitter.on('each2', () => each(2)) // 继续插入监听，正常情况下，先监听的先触发
emitter.prependListener('each2', () => each(3)) // 插队，此时新注册的事件最先触发

emitter.emit('each1')
emitter.emit('each2')

emitter.removeAllListeners() // all will expired

emitter.emit('each1')
emitter.emit('each2')
