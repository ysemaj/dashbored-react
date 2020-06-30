import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Splash from './routes/Splash';
import Contact from './routes/Contact';
import Error from './routes/Error';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

class Routing extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(Routing);
