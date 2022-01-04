const os = require('os')

console.log(os.arch()) // 底层架构
console.log(os.cpus()) // cpu
console.log(os.endianness()) // 大端序还是小端序
console.log(os.freemem() / 1024 / 1024 / 1024 + 'G') // 可用内存
console.log(os.totalmem() / 1024 / 1024 / 1024 + 'G') // 总内存
console.log(os.homedir()) // 用户主目录
console.log(os.hostname()) // 主机名
console.log(os.loadavg()) // 负载均衡的计算（仅linux和macos）
console.log(os.networkInterfaces()) // 网络接口
console.log(os.type()) // 操作系统
console.log(os.platform()) // 编译平台（系统内核）
console.log(os.release()) // 内核版本号
console.log(os.tmpdir()) // 系统临时文件夹路径
console.log(os.uptime()) // 本次开机已运行时长
console.log(os.userInfo()) // 用户信息
