import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainFrame from './component/MainFrame'
import Login from './component/Login'
import Register from './component/Register'
import VerifyPage from './component/VerifyPage'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
          <Router>
          <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/verify" component={VerifyPage} />
                <Route path="/" component={MainFrame} />
            </Switch>
        </Router>
     </Provider>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
