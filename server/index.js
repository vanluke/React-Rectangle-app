import koa from 'koa';
import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import serve from 'koa-static';
import routes from './routes';
import error from './error';
import config from './../server.config';

const app = koa();
const port = config.get('port');
const host = config.get('host');
const version = config.get('version');

process.on('uncaughtException', console.error);

app.use(json());
app.use(cors());
app.use(serve('./public'));
app.use(mount(`/api/v${version}`, routes.middleware()));

app.use(error);

app.listen(port, host, () => {
  console.log(`listening on ${host}:${port}/api/v${version}`);
});
