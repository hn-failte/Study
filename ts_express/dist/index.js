"use strict";
const express, { Request, Response, NextFunction } = require('express');
const app = express();
app.use('/', function (req, res, next) {
    console.log(res);
    res.text('ok');
});
app.listen("10086");
