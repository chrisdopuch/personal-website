import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App title="Chris Dopuch Zone"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
