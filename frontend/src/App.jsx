import React from 'react';
import { Link, Route, Switch, BroswerRouter as Router, withRouter } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppFooter from './components/footer/AppFooter';
import CookieBar from './components/CookieBar';

import Splash from './routes/Splash';
import Contact from './routes/Contact';
import Error from './routes/Error';

import './resources/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope);

class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <main className="mt-2 container">
          <Switch>
            <Route path="/" component={Splash} exact />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </main>
        <AppFooter />
        <CookieBar />
      </>
    );
  }
}

export default App;
