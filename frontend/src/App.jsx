import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/footer/Footer';
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

const App = () => (
  <>
    <Header />
    <main className="mt-2 container">
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
    <Footer />
    <CookieBar />
  </>
);

export default App;
