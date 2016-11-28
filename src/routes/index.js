import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import routes from 'routes/routes';

const store = configureStore();

render(<Provider store={store}>{routes}</Provider>,
    document.getElementById('container'));
