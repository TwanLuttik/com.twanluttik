import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';


if (process.env.NODE_ENV === 'production') {
  console.log('production build...');
  
  ReactGA.initialize('UA-124433096-3');
  ReactGA.pageview(window.location.pathname + window.location.search);
} else {
  //@ts-ignore
  window.core = core;
}


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();