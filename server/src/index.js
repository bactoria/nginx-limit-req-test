const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan')
const serve = require('koa-static');

const app = new Koa();
const router = new Router();


app.use(cors());
app.use(bodyParser())
app.use(morgan('dev'))
app.use(serve(__dirname + '/public'));

router.post('/', (ctx, next) => {
    ctx.body = ctx.request.body.cnt
    console.log(ctx.request.body.cnt);
});

router.post('/recommend', (ctx, next) => {
    ctx.body = ctx.request.body.cnt
    console.log(ctx.request.body.cnt);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('limit_req server is listening to port 4000');
});


