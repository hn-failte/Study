namespace ns1 {
    export let i = 10;
    console.log(i)
    export const func = () => {
        i += 1;
    }
}

console.log(ns1.i)

for(let i = 0; i < 3; i++) {
    ns1.func()
    console.log(ns1.i)
}
