import React from 'react';
import AppFooterColumn from './AppFooterColumn';

class AppFooterBottomRow extends React.Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <section className="container py-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src={require('../../resources/img/logo.png')}
              alt=""
              width="30"
              height="30"
            />
            <small className="d-block mb-3 text-muted">© dashbored {this.showCurrentYear()}</small>
            <small className="d-block mb-3 mr-5 text-muted">
              Built with &#10084; in Shrewsbury, United Kingdom
            </small>
          </div>
          <AppFooterColumn />
        </div>
      </section>
    );
  }
}

export default AppFooterBottomRow;
