/// <reference path="../filepath.d.ts">
/// <reference path="../global.d.ts">

import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express()

interface Params {
	username: string,
	password: string
}

app.use('/', function(req: Request, res: Response, next: NextFunction): void{
	let cb: string = req.query.cb;
	if(!req.query.username || !req.query.password) res.sendStatus(420)
	// if(!req.query.username || !req.query.password) res.sendStatus(419)
	else {
		let params: Params = {
			username: req.query.username,
			password: req.query.password,
		}
		res.send(cb + '(' + JSON.stringify(params) + ')')
	}
})

app.listen(10086, function(): void{
	console.log("run on http://localhost:10086")
})
