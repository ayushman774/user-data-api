const koa = require('koa');;
const koaBody = require('koa-body');

const app = new koa();

app.use(koaBody());

// data of users will fetch from users.js

let users = require("./users.js");

app.use(users.routes());

app.listen(3000);