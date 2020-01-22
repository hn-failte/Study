const Koa = require("koa");
const app = new Koa();
const https = require("https");
const http = require("http");

app.use(async (ctx, next) => {
  if (ctx.url === "/home") {
    ctx.body = "Home";
    return;
  } else if (ctx.url === "/test") {
    ctx.body = "Test";
    return;
  }
  console.log(1);
  await next();
  console.log(3);
  ctx.body = ctx;
});

app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(4);
});

app.listen(3000);
https.createServer(app.callback()).listen(3001);
http.createServer(app.callback()).listen(3002);
