export type EventType = string | symbol
export type EventHandler = (value: unknown) => unknown
export type WildcardHandler = (type: EventType, value: unknown) => unknown

class Mitt<Key extends EventType = EventType> {
    all: Map<EventType, Array<EventHandler>>
    constructor(
        all?: Map<Key, Array<EventHandler>>
    ) {
        this.all = all || new Map()
        console.log('init')
    }

    on<OnKey extends Key = Key>(type: OnKey, handler: EventHandler) {
        const handlers: Array<EventHandler> | undefined = this.all!.get(type)
        if (handlers) {
            handlers.push(handler)
        }
        else {
            this.all!.set(type, [handler] as Array<EventHandler>)
        }
    }

    off<OffKey extends Key = Key>(type: OffKey, handler?: EventHandler) {
        const handlers: Array<EventHandler> | undefined = this.all!.get(type)
        if (handlers) {
            if (handler) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1)
            }
            else {
                this.all!.set(type, [])
            }
        }
    }

    emit<EmitKey extends Key = Key>(type: EmitKey, evt?: any) {
        let handlers = this.all!.get(type)
        if (handlers) {
            handlers
                .slice()
                .map((handler) => {
                    handler(evt!)
                })
        }

        handlers = this.all!.get('*')
        if (handlers) {
            (handlers as Array<WildcardHandler>)
                .slice()
                .map((handler) => {
                    handler(type, evt!)
                })
        }
    }

    async emitSync<EmitKey extends Key = Key>(type: EmitKey, payload?: any) {
        let handlers = this.all!.get(type)
        if (handlers) {
            for (const handler of handlers) {
                await handler(payload!)
            }
        }

        handlers = this.all!.get('*')
        if (handlers) {
            for (const handler of (handlers as Array<WildcardHandler>)) {
                await handler(type, payload!)
            }
        }
    }
}


const mitt = new Mitt()

mitt.on('test1', () => {
    console.log('start')
})

mitt.on('test1', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('then500')
            resolve(void 0)
        }, 500)
    })
})

mitt.on('test1', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('then1000')
            resolve(void 0)
        }, 1000)
    })
})

mitt.on('test1', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('then100')
            resolve(void 0)
        }, 100)
    })
})

// mitt.emit('test1')
mitt.emitSync('test1')
