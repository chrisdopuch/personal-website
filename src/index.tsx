import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react-hookstore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// initialize the global hook store
createStore({ state: false });

ReactDOM.render(<App title="The Chris Dopuch Zone" />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
