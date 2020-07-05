import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charset="utf-8" />
          <link rel="icon" href="../src/resources/img/favicon.ico" />
          <link rel="apple-touch-icon" href="../src/resources/img/logo.png" />
          <link rel="canonical" href="http://dashbo.red/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="noindex" />
          <meta name="title" content="Dashbored" />
          <meta name="description" content="Dashbored | Built by students, for students." />

          <title>Dashbored</title>

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </div>
    );
  }
}

export default Head;
