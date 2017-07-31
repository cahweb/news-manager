import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import './main.scss';

import Nav from './components/nav';
import News from './components/news';
import NewsSingle from './components/news-single';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/news/:slug" component={NewsSingle} />
          <Route path="/" component={News} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.root')
);
