const util = require('util')

const test = util.deprecate(() => {
    console.log('deprecate')
}, 'deprecate test')

test()