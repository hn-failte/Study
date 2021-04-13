const Monster = require('./interface')

const obj = new Monster({
    hint: ()=>{
        console.log("attack")
    },
    cost: ()=>{
        console.log("cost 5")
    },
})

obj.cost()
