import 'newrelic';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAnalytics from 'react-ga';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { initializeStore } from './store';

const isProduction = process.env.NODE_ENV === 'production';

// initialize google analytics tracking, only in producton mode
GoogleAnalytics.initialize('UA-128558512-1', { testMode: !isProduction });

// initialize the app store
initializeStore();

ReactDOM.render(<App title={`${!isProduction ? 'Dev: ' : ''}The Chris Dopuch Zone`} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
