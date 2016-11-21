import Router from 'koa-router';
import {
  putRectangle,
  getAllRectangles,
  deleteRectangle,
  postRectangle } from './rectagnles';

const routes = new Router();

routes.put('/rect/:id', putRectangle);

routes.get('/rect', getAllRectangles);

routes.del('/rect/:id', deleteRectangle);

routes.post('/rect', postRectangle);

export default routes;
