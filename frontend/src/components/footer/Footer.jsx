import React from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <TopRow />
        <BottomRow />
      </footer>
    );
  }
}

export default Footer;
