import Koa from 'koa';
import Router from '@koa/router';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import parse from 'co-body';
import logger from 'koa-logger';
import fs from 'fs';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.readFileSync('../client/dist/index.html');
  next();
}).get('/:id', (ctx, next) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.readFileSync('dist/index.html');
  next();
}).get('/health', (ctx, next) => {
  ctx.body = 'Hello world!';
  next();
})
  .post('/api/getToken', async (ctx, next) => {
    const data = await parse(ctx);
    console.log(data);
    ctx.body = {
      ...data,
    };
    next();
  });

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    console.log('koa error', err);
    // will only respond with JSON
    ctx.status = err.statusCode || 500;
    ctx.body = {
      ...err,
    };
  }
}).use(koaStatic('../client/dist'))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())
  .use(logger());

app.listen(3000, () => {
  console.log('API proxy start: http://localhost:3000');
});

