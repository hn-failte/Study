const deasync = require("deasync");

const func = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, 1000);
  })
    .then(
      (res) => {
        console.log(res);
        return res;
      },
      (rej) => rej
    )
    .catch((err) => console.log(err));

const defunc = deasync(func);

console.log(0);
defunc();
console.log(2);
