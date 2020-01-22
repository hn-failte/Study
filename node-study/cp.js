const {exec, spawn} = require('child_process')

exec('shutdown /s /t 360000', ['-c'], (err, stdout, stderr) => {
    if(err) console.log(stderr)
    else console.log(stdout)
})

// exec('shutdown /a', ['-c'], (err, stdout, stderr) => {
//     if(err) console.log(stderr)
//     else console.log(stdout)
// })

// exec('npm run dev', ['-c'], (err, stdout, stderr) => {
//     if(err) console.log(stderr)
//     else console.log(stdout)
// })
