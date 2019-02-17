import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAnalytics from 'react-ga';
import App from './components/App';
import { StateProvider } from './components/contexts/state';
import registerServiceWorker from './registerServiceWorker';

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
