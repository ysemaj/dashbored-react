import React from 'react';

class CookieNotification extends React.Component {
  render() {
    return (
      <div className="animate__animated animate__fadeInUp w-100" id="cookie-wrapper">
        <div className="align-middle text-center mb-1">
          <small>
            This website uses cookies to ensure you have the best possible user experience, please
            see our cookie policy to learn more about the information we collect.
          </small>
          <a className="close" id="cookie-close" href="?#">
            <span aria-hidden="true">&times;</span>
          </a>
        </div>
      </div>
    );
  }
}

export default CookieNotification;
