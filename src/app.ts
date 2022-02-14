import Koa from 'koa';
import InitManager from './core/init';
import CONFIG from './config';

const app = new Koa();

new InitManager(app);

app.listen(CONFIG.PORT, () => {
  console.log(`Please open ${CONFIG.BASE_URL}`);
});
