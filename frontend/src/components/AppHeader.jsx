import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class AppHeader extends React.Component {
  render() {
    return (
      <Router>
        <section id="nav">
          <nav
            id="navbar"
            className="navbar fixed-top flex-md-nowrap bg-light border-bottom shadow"
          >
            <div className="col logo">
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                <img
                  className="logo-img"
                  src={require('../resources/img/logo.png')}
                  id="logo-img"
                  alt="dashbored logo"
                />
              </Link>
            </div>
            <ul className="navigation pl-5 my-auto" id="navigation-bar">
              <li>
                <Link className="navigation-link" id="navigation-home" to="/">
                  Home
                </Link>
              </li>
              <li className="navigation-link dropdown show-on-hover">
                <Link
                  to="/about"
                  id="navigation-about"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-animations="fadeInLeft"
                >
                  About
                </Link>
                <div className="dropdown-menu shadow-sm" id="dropdown-container">
                  <div className="row">
                    <div className="col ml-2 mt-1" id="left-dropdown">
                      <div className="dropdown-item pt-3" id="dropdown-about">
                        <a className="h6" href="/about">
                          About
                        </a>
                        <p className="text-muted">Our story, team, goals</p>
                      </div>
                      <div className="dropdown-item pt-3" id="dropdown-customers">
                        <a className="h6" href="/customers">
                          Customers
                        </a>
                        <p className="text-muted">Case studies, testimonials, blogs</p>
                      </div>
                      <div className="dropdown-item pt-3" id="dropdown-partners">
                        <a className="h6" href="/legal/investors">
                          Partners
                        </a>
                        <p className="text-muted">Find or become a partner</p>
                      </div>
                      <div className="dropdown-item pt-3" id="dropdown-awards">
                        <a className="h6" href="/awards">
                          Awards
                        </a>
                        <p className="text-muted">Recognition of our work</p>
                      </div>
                    </div>
                    <div className="vr mr-2 mt-1"></div>
                    <div className="col pl-0" id="right-dropdown">
                      <h4 className="dropdown-header text-uppercase" id="dropdown-about-news">
                        N e w s
                      </h4>
                      <div className="dropdown-item" id="dropdown-about">
                        <a className="" href="/">
                          This is news
                        </a>
                      </div>
                      <div className="dropdown-item" id="dropdown-customers">
                        <a className="" href="/">
                          This is more news
                        </a>
                      </div>
                      <div className="dropdown-item" id="dropdown-partners">
                        <a className="" href="/">
                          Even more news!
                        </a>
                      </div>
                      <div className="dropdown-item" id="dropdown-awards">
                        <a className="" href="/">
                          Some more news again!
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer px-4">
                    <div className="clearfix">
                      <span className="float-left">Built by students, for students.</span>
                      <a className="float-right non-a" href="/">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link className="navigation-link" id="navigation-pricing" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="navigation-link" id="navigation-docs" to="/customers">
                  Customers
                </Link>
              </li>
              <li>
                <Link className="navigation-link" id="navigation-contact" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="col-auto sign-in" id="sign-in">
              <Link className="text-muted font-weight-light" to="/sign-in">
                Sign in
              </Link>
            </div>
            <div className="col-auto get-started">
              <button
                className="btn btn-outline-danger get-started-button"
                href="#"
                data-toggle="modal"
                data-target="#registerModal"
              >
                <a className="mx-3 get-started-text" href="?#">
                  Get Started
                </a>
              </button>
            </div>
          </nav>
        </section>
      </Router>
    );
  }
}

export default AppHeader;
