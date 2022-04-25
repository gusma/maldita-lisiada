import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // Place this in the pages/_app.js file
useEffect(() => {
  import("bootstrap/dist/js/bootstrap.bundle");
}, []);

  return <Component {...pageProps} />
}

export default MyApp
