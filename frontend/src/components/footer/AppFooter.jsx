import React from 'react';
import AppFooterTopRow from './AppFooterTopRow';
import AppFooterBottomRow from './AppFooterBottomRow';

class AppFooter extends React.Component {
  render() {
    return (
      <footer id="footer">
        <AppFooterTopRow />
        <AppFooterBottomRow />
      </footer>
    );
  }
}

export default AppFooter;
