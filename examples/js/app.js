import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Complex from './complex/demo';


const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home } />
          <Route path='examples'>
            <Route path='complex' component={ Complex } />
          </Route>
        </Route>
      </Router>
    </AppContainer>, document.querySelector('#root'));
};

if (module.hot) {
  module.hot.accept('./app', renderApp);
}

renderApp();
