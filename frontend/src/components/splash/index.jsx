import React from 'react';
import ReactDOM from 'react-dom';

export class Landing extends React.Component {
  render() {
    return (
      <>
        <img className="logo-particles mx-auto" src="images/logo-particles.png" />
        <section className="home-splash container">
          <div className="jumbotron text-center mb-0 transparent">
            <h1
              className="display-3 font-weight-bold animate__animated animate__flipInX"
              id="splash-heading"
            >
              Launch your very own <u>dashbored</u> today.
            </h1>
            <br />
            <p className="animate__animated animate__zoomInDown h5 text-muted mx-auto fw-600">
              Manage your club or society's projects, finances, marketing and more from one
              centralised user-friendly platform.
            </p>
            <div className="animate__animated animate__zoomIn animate__delay-1s" id="screenshot">
              <img
                className="rounded img-fluid mx-auto shadow-lg"
                src="images/dashbored-screenshot.jpg"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export class Features extends React.Component {
  render() {
    return (
      <section className="home-features gradient-red">
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eff2f9"
              fill-opacity="1"
              d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="jumbotron text-center transparent">
          <h2 className="display-4">Features</h2>
          <div className="space-50"></div>
          <div className="container pt-4">
            <div className="row">
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-server"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">High Performance</h3>
                    <p className="">
                      Built with performance in mind, dashbored utilises the Node.js engine running
                      on dedicated servers to ensure blindingly fast load times.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-lock"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Impenetrable Security</h3>
                    <p className="">
                      We know how important data security is to you. That's why we've integrated
                      various systems to ensure that your data is safe and GDPR compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-50"></div>
            <div className="row">
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-paint-brush"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Easily Customisable</h3>
                    <p className="">
                      Easily customise your dashbored platform from the preferences page based upon
                      aesthetic or accessibility needs. Oh, and did we mention dark mode?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-users"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Create Teams</h3>
                    <p className="">
                      Using the built in admin console, you are able to create individual profiles
                      for each of your team mates, and manage their privileges, access logs and much
                      more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-50"></div>
            <div className="row">
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-tasks"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Centralise Projects</h3>
                    <p className="">
                      Use the built-in project management features to centralise your largest events
                      and collaborate at scale - either within your team or with other dashbored
                      users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-50"></div>
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-pound-sign"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Manage Finances</h3>
                    <p className="">
                      Forget the frustration of managing and viewing your finances by using our
                      built in finance management features, such as invoice tracking, real-time
                      balance updates, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-50"></div>
            <div className="row">
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-chart-bar"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Integrated Analytics</h3>
                    <p className="">
                      Using our integrated datapoint collection and analytics functions and, you can
                      view your KPI's all in one place, and view historical data to make informed
                      decisions in the future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-50"></div>
              <div className="col-sm text-left">
                <div className="media">
                  <div className="my-auto mr-4">
                    <div className="fa-4x">
                      <i
                        className="fas fa-bell"
                        data-fa-transform="shrink-8"
                        data-fa-mask="fas fa-circle 4x"
                      ></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="h4">Push Notifications</h3>
                    <p className="">
                      Refreshing your page is a thing of the past thanks to our very own
                      custom-built REST API which ensures that your dashbored is always up-to-date
                      and showing the latest data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eff2f9"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <section className="home-about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 text-center">About</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">50+</div>
              <div className="h5">Universities</div>
              <p>
                Clubs and societies from more than fifty universities use the dashboard platform to
                manage their society affairs.
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">35+</div>
              <div className="h5">Pre-Built Page Examples</div>
              <p>
                Our pre-built page examples are a perfect way to get inspired for creating new pages
                and views.
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">10+</div>
              <div className="h5">Integrations</div>
              <p>
                We're constantly working to include new integrations in our platform so that you can
                manage all of your services from one central dashboard.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a className="btn btn-marketing btn-danger rounded-pill lift lift-sm" href="/customers">
              Learn More
            </a>
          </div>{' '}
          -->
        </div>
      </section>
    );
  }
}

export class Partners extends React.Component {
  render() {
    return (
      <section className="home-partners" id="partners-background">
        <div className="jumbotron text-center transparent">
          <div className="container">
            <h2 className="h3">Partner Organisations</h2>
            <p>
              We work with a variety of partner organisations to provide our customers with the best
              service possible{' '}
            </p>
            <br />
            <div className="pt-2">
              <a className="btn btn-outline-light mr-2" href="legal/investors">
                View Partners
              </a>
              <a className="btn btn-outline-danger ml-2" href="legal/investors">
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export class Team extends React.Component {
  render() {
    return (
      <section className="home-about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 text-center">About</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">50+</div>
              <div className="h5">Universities</div>
              <p>
                Clubs and societies from more than fifty universities use the dashboard platform to
                manage their society affairs.
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">35+</div>
              <div className="h5">Pre-Built Page Examples</div>
              <p>
                Our pre-built page examples are a perfect way to get inspired for creating new pages
                and views.
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <div className="display-1 font-weight-bold greyblue">10+</div>
              <div className="h5">Integrations</div>
              <p>
                We're constantly working to include new integrations in our platform so that you can
                manage all of your services from one central dashboard.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a className="btn btn-marketing btn-danger rounded-pill lift lift-sm" href="/customers">
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export class Customers extends React.Component {
  render() {
    return (
      <section className="home-customers">
        <div className="jumbotron text-center transparent">
          <h2 className="h3">Customers</h2>
          <div className="text-center mb-10">
            <p className="lead">Over one hundred clubs and societies use our platform.</p>
          </div>
          <div className="container pb-5" id="societies">
            <div className="row justify-content-center overlay">
              <img className="home-splash-clients" src="images/users/aberlawsoc-grey.png" />
              <img className="home-splash-clients" src="images/users/aberuni-grey.png" />
              <img className="home-splash-clients" src="images/users/abercompsoc-grey.png" />
              <img className="home-splash-clients" src="images/users/abercrimsoc-grey.png" />
              <img className="home-splash-clients" src="images/users/abersu-grey.png" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export class Newsletter extends React.Component {
  render() {
    return (
      <section className="home-newsletter gradient-purple">
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eff2f9"
              fill-opacity="1"
              d="M0,0L48,26.7C96,53,192,107,288,122.7C384,139,480,117,576,133.3C672,149,768,203,864,202.7C960,203,1056,149,1152,106.7C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="jumbotron text-center transparent">
          <h2 className="h3">Subscribe to our newsletter</h2>
          <p className="">Get notified about important announcements and new releases.</p>
          <form className="pt-2" action="">
            <input className="mr-2 newsletter-input" placeholder="Your email" />
            <button className="newsletter-button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <label className="text-sm">
            View our privacy policy{' '}
            <a className="text-sm" href="legal/privacy">
              here.
            </a>
          </label>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eff2f9"
              fill-opacity="1"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,85.3C840,117,960,203,1080,197.3C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    );
  }
}

export class Spacer extends React.Component {
  render() {
    return <div className="space-100"></div>;
  }
}

// module.exports = {
//   Landing,
//   Features,
//   About,
//   Partners,
//   Team,
//   Customers,
//   Newsletter,
//   Spacer,
// };
