import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAnalytics from 'react-ga';
import { createStore } from 'react-hookstore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const isProduction = process.env.NODE_ENV === 'production';

// initialize google analytics tracking, only in producton mode
GoogleAnalytics.initialize('UA-128558512-1', { testMode: !isProduction });

export interface IAppStore {
  isNavDrawerOpen: boolean;
  isDarkMode: boolean;
}

const initialStore: IAppStore = {
  isDarkMode: false,
  isNavDrawerOpen: false,
};

// initialize the global hook store
createStore('appStore', initialStore);

ReactDOM.render(<App title={`${!isProduction ? 'Dev: ' : ''}The Chris Dopuch Zone`} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
