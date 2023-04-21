import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAnalytics from 'react-ga';
import App from './components/App';
import { StateProvider } from './components/contexts/state';
import registerServiceWorker from './registerServiceWorker';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyABGy-RumL_QBcMfJE2ERb4Zi9g8MavQOI',
  authDomain: 'dopuch-personal-website.firebaseapp.com',
  projectId: 'dopuch-personal-website',
  storageBucket: 'dopuch-personal-website.appspot.com',
  messagingSenderId: '516876685662',
  appId: '1:516876685662:web:f4b5bc8e30632bca483fcf',
};

initializeApp(firebaseConfig);

const isProduction = process.env.NODE_ENV === 'production';

// initialize google analytics tracking, only in producton mode
GoogleAnalytics.initialize('UA-128558512-1', { testMode: !isProduction });

ReactDOM.render(
  <StateProvider>
    <App title={`${!isProduction ? 'Dev: ' : ''}The Chris Dopuch Zone`} />
  </StateProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
