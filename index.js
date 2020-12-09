const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = Router();

const getStands = () => {
    let fullpath = path.join(__dirname, 'stands.json');
    return fs.readFileSync(fullpath, 'utf8');
}
router.get('/', async (ctx) => {
    const stands = await getStands();
    ctx.body = JSON.parse(stands);
});

app.use(router.routes());
app.listen(3000);
