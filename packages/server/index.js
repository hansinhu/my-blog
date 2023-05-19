const Koa = require("koa");
const Router = require('@koa/router')
const bodyParser = require("koa-bodyparser");
const parse = require('co-body');
// const logger = require('koa-logger')
const log4js = require('./src/log4js/index')
const fs = require("fs");
const http = require("http")
const generate = require('./src/chatgpt/generate')
const IO = require('koa-socket')
const url = require('url')
const socketCb = require('./src/socket/index.js')

const app = new Koa();
const router = new Router();
const server = http.createServer(app.callback());
const io = require('socket.io')(server, {
  pingTimeout: 30000
  // ...other props
});

// console.info("openApiKey: ")
// console.info(process.env.OPENAI_API_KEY)

router
	.get('/health', (ctx, next) => {
    ctx.body = "Hello world!"
	})
	.get('/api/test', (ctx, next) => {
    ctx.body = "Hello api!"
	})
	.post('/api/chatgpt-3/generate', async (ctx, next) => {
		const result = await generate(ctx)
		console.info('result', result)
		ctx.body = {
			...result,
		}
	})

app
.use(log4js.koaLogger(
	log4js.getLogger("http"),
	{
		level: "auto"
	}
))
.use(async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			// will only respond with JSON
			ctx.status = 200;
			ctx.body = {
				success: false,
				statusCode: err.statusCode,
				message: err.message,
			};
		}
	})
	.use(router.routes())
  .use(router.allowedMethods())
	.use(bodyParser())

io.on('connection', socket => {
	console.log('io connection 666 !!!')
	const query = url.parse(socket.request.url, true).query

	console.log('socker query:', query)

	socketCb(io, socket)
})


server.listen(3001, () => {
	console.log(`API proxy start: http://localhost:3001`)
});
