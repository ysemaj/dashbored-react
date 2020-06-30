import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AppFooterTopRow extends React.Component {
  render() {
    return (
      <section className="container pt-4 mb-md-5 pt-md-5">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <div className="footer-icon fa-2x">
              <h5>Accepted payment providers</h5>
              <FontAwesomeIcon icon={['fab', 'cc-apple-pay']} title="Apple Pay" />
              <FontAwesomeIcon icon={['fab', 'cc-paypal']} title="PayPal" />
              <FontAwesomeIcon icon={['fab', 'cc-mastercard']} title="Mastercard" />
              <FontAwesomeIcon icon={['fab', 'cc-visa']} title="Visa" />
              <FontAwesomeIcon icon={['fab', 'cc-stripe']} title="Stripe" />
            </div>
            <div className="footer-icon fa-2x">
              <h5 className="text-right">Social media</h5>
              <a href="https://www.facebook.com/thedashbored">
                <FontAwesomeIcon icon={['fab', 'facebook']} title="Facebook" />
              </a>
              <a href="https://www.twitter.com/dashbo_red">
                <FontAwesomeIcon icon={['fab', 'twitter']} title="Twitter" />
              </a>
              <a href="https://www.linkedin.com/company/dashbored">
                <FontAwesomeIcon icon={['fab', 'linkedin']} title="LinkedIn" />
              </a>
              <a href="https://github.com/ysemaj/dashbored">
                <FontAwesomeIcon icon={['fab', 'github']} title="GitHub" />
              </a>
              <a href="mailto:james@dashbo.red">
                <FontAwesomeIcon icon="envelope" title="Email" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AppFooterTopRow;
