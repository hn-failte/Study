let ora
try {
    ora = require.resolve('ora')
} catch (error) {
    console.log('need ora')
    process.exit()
}

ora = require("ora");

const spinner = ora("doing")
spinner.start()
setTimeout(() => {
    spinner.stop();
}, 5000)
