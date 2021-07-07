// pages/_app.js
import React from 'react';
import 'bootstrap/scss/bootstrap.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
