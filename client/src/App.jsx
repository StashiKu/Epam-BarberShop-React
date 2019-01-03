import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Switch>
              { routes.map((route, idx) => <Route key={idx} {...route} />) }
            </Switch>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
