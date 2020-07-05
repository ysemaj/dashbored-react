import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './utils/Head';
import * as serviceWorker from './serviceWorker';

import './resources/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope);

ReactDOM.render(
  <>
    <Head />
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
