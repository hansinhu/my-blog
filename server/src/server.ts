import Koa from 'koa';

const app = new Koa();


app.listen(3008, () => {
  console.log('Server running on port 3008');
});

