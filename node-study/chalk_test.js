// const chalk = require('chalk')
// var cstr = chalk.red('error');
// cstr = cstr.replace(/\[/g, ':')
// console.log(cstr)
process.stderr.write('\033[31m error \033[0m\r\n')
// process.stderr.write(chalk.red('log'))
