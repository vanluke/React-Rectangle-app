import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from 'app.js';
import Gallery from 'gallery';

const routes =
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery} />
      <Redirect from="/" to="gallery" />
      <Route path="gallery" component={Gallery} />
    </Route>
  </Router>);

export default routes;
