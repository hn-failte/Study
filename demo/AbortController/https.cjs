const https = require('https');
const { AbortController } = require('abort-controller');

function makeRequest() {
  const controller = new AbortController();

  const req = https.request({
    hostname: 'https://baidu.com',
    port: 80,
    path: '/',
    method: 'GET',
    // 将 AbortSignal 传递给请求
    signal: controller.signal
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response:', data);
    });
  });

  req.on('error', (e) => {
    if (e.name === 'AbortError') {
      console.log('请求被取消');
    } else {
      console.error(`请求出错: ${e.message}`);
    }
  });

  req.end();

  // 模拟取消操作
  setTimeout(() => {
    controller.abort();
  }, 300);
}

makeRequest();
