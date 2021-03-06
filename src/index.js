/* eslint no-underscore-dangle:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import reducers from './reducers';
import './main.scss';

import Nav from './components/nav';
import News from './components/news';
import NewsSingle from './components/news-single';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <div>
        <Nav />
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
        <div className="background" />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/news/:hostname/:id" component={NewsSingle} />
          <Route path="/" component={News} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.root')
);
