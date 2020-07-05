import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/footer/Footer';
import CookieNotification from './components/CookieNotification';

import Splash from './routes/Splash';
import Contact from './routes/Contact';
import Error from './routes/Error';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="mt-2 container">
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/contact" exact component={Contact} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
        <CookieNotification />
      </Router>
    );
  }
}

export default App;
