import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import CookieNotification from './components/CookieNotification';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Error from './routes/Error';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
        <CookieNotification />
      </Router>
    );
  }
}

export default App;
