import type { Context } from 'koa';
import Router from '@koa/router';
import { ssrRenderPage } from './controller/page';
import { getData } from './controller/api';

const router = new Router();
router.get('/', async (ctx: Context) => {
  ctx.redirect('/page/home');
});
router.get('/page/:pageName', ssrRenderPage);
router.get('/page/:pageName/:subPageName', ssrRenderPage);
router.get('/api/getData', getData);
const routers = router.routes();

export default routers;
