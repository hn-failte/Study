function shout() :void {
    console.log("AHHHH")
}

function rndNum(range: number) :number {
    return Math.ceil(Math.random() * range)
}

shout()

console.log(rndNum(100))

console.log((rndNum as (range: number) => number)(100 as number))

let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
