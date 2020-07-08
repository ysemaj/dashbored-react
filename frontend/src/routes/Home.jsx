import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Splash from '../components/splash';

class Home extends React.Component {
  render() {
    return (
      <main className="mt-2">
        <Splash.Landing />
        <Splash.Features />
        <Splash.About />
        <Splash.Spacer />
        <Splash.Partners />
        <Splash.Spacer />
        <Splash.Team />
        <Splash.Spacer />
        <Splash.Customers />
        <Splash.Newsletter />
      </main>
    );
  }
}

export default withRouter(Home);
