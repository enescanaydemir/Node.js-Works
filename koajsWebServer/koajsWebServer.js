import Koa from 'koa';
import Router from 'koa-router'

const app = new Koa();
const router = new Router();


router.get('/', ctx => {
    ctx.status = 200
    ctx.body = '<h1>Welcome To Home Page</h1>'
})

router.get('/index', ctx => {
    ctx.status = 200
    ctx.body = '<h1>Welcome To Index Page</h1>'
})

router.get('/about', ctx => {
    ctx.status = 200
    ctx.body = '<h1>Welcome To About Page</h1>'
})

router.get('/contact', ctx => {
    ctx.status = 200
    ctx.body = '<h1>Welcome To Contact Page</h1>'
})


const port = 3000

app.use(router.routes())

app.listen(port, () => {
    console.log(`Sunucu ${port} Portu ile Başlatıldı.`)
})