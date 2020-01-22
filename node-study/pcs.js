process.emitWarning('warning', 'MSG Warning', '1001')
// process.stdin.setEncoding('utf8');
// process.stdin.on('readable', () => {
//     let chunk = process.stdin.read()
//     process.stdout.write(`数据: ${chunk}`);
//     if(chunk.trim() !== 'exit') process.stdin.read()
// });
// process.stdin.on('end', () => {
//   process.stdout.write('结束');
// });
process.chdir('./dist')
require(require('path').resolve(process.cwd(), require('fs').readdirSync(process.cwd())[0]))
